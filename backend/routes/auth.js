const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  const { fullName, cnic, email } = req.body;

  if (!fullName || !cnic || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if the user already exists
  const userExists = await User.findOne({ cnic });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Generate random password
  const randomPassword = crypto.randomBytes(8).toString("hex");

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(randomPassword, 10);

  // Create new user
  const newUser = new User({
    fullName,
    cnic,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    // Send email with the password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Registration Details",
      text: `Hello ${fullName},\n\nYour registration was successful. Your login password is: ${randomPassword}\n\nBest regards,\nSaylani Welfare`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Registration successful! Check your email for login details." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

module.exports = router;
