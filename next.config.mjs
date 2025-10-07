import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "newapi.be-group.com"
        ], // Add the allowed domain here
    },
};

export default withNextIntl(nextConfig);
