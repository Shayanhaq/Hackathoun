import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  server: {
    proxy: {
      '/register': 'https://your-api-endpoint.com', // Aapka API endpoint
    },
  },
};
