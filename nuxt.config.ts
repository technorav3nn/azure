// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// SSR must be turned off
	ssr: false,
	compatibilityDate: "2024-12-03",
	modules: ["@nuxt/ui", "@nuxt/ui-pro"],
});
