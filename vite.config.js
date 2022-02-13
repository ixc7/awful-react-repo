import fs from 'fs/promises'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  }
}))

// https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919
