/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      {
        source: "/:lng/service-area/long-beach",
        destination: "/:lng/service-area/los-angeles-lax",
      },
      {
        source: "/:lng/service-area/orange-county",
        destination: "/:lng/service-area/los-angeles-lax",
      },
      {
        source: "/:lng/service-area/oakland",
        destination: "/:lng/service-area/san-francisco-sfo",
      },
    ];
  },
};

export default nextConfig;