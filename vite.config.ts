import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), vike()],
});
