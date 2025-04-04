import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':'http://localhost:3000',
      //automatically is toolchain se koi bhi req agar jaygi, jis req k andar /api h , ye automatically detect kar lega or https://localhost:3000 ko /api k peeche append kar dega... or ye proxy lga di jaygi jo req aa rahi h wo isi url se aa rahi h
    }
  },
})
