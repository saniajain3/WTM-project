import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss"; // Import Tailwind CSS

export default defineConfig({
	plugins: [react()],
	base: "/", // You can change to '/' if needed, depending on your deployment needs
	css: {
		postcss: {
			plugins: [tailwindcss], // Add Tailwind CSS here
		},
	},
	assetsInclude: ["**/*.gif", "**/*.jpeg", "**/*.jpg", "**/*.png", "**/*.svg"],
});
