// Importing env files here to validate on build
import "./src/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	transpilePackages: ["@midday/ui"],
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default config;