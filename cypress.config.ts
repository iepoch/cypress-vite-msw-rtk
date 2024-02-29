import path from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'
const __dirname = path.dirname('./vite.config.ts');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    specPattern: '**/*.e2e.ts',
    video: false,
    modifyObstructiveCode: true,
    watchForFileChanges: true,
    screenshotOnRunFailure: false,
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor(path.resolve(__dirname, './vite.config.ts')),
        )
      },
    },

    component: {
      devServer: {
        framework: "react",
        bundler: "vite",
      },
    },
    env: {
      viewports: [
        {
          width: 599,
          height: 1065,
          xs: true,
        },
        {
          width: 899,
          height: 1598,
          sm: true,
        },
        {
          width: 1199,
          height: 674,
          md: true,
        },
        {
          width: 1535,
          height: 836,
          lg: true,
        },
        {
          width: 1920,
          height: 1080,
          xl: true,
        },
      ],
    },
  })