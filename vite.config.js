import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath, URL } from 'node:url';
import { inspectorServer } from '@react-dev-inspector/vite-plugin';

export default defineConfig({
	plugins: [react(), svgr(), inspectorServer()],
	server: {
		port: '3003',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		}
	}
})
