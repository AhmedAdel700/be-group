import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "koala.nbg1.your-objectstorage.com", // Add the allowed domain here
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "koala.nbg1.your-objectstorage.com",
                pathname: "/**",
            },
        ],
    },
};

export default withNextIntl(nextConfig);
