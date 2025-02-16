import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-gh-pages/', // вказує на коректний шлях для GitHub Pages
});
