/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // EmailJS configuration
    // Replace these with your actual EmailJS credentials when deploying
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || "",
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "",
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "",
    EMAILJS_CONFIRMATION_TEMPLATE_ID: process.env.EMAILJS_CONFIRMATION_TEMPLATE_ID || "",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
