import path from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'
const __dirname = path.dirname('./vite.config.ts');
import { configureVisualRegression } from 'cypress-visual-regression'

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotOnRunFailure: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.e2e.ts',
    screenshotsFolder: './cypress/snapshots/actual',
    env: {
      failSilently: false,
      screenshotsFolder: './cypress/snapshots/actual',
      trashAssetsBeforeRuns: true,
      visualRegressionType: 'base',
      visualRegressionBaseDirectory: 'cypress/snapshot/base',
      visualRegressionDiffDirectory: 'cypress/snapshot/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true,
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
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor(path.resolve(__dirname, './vite.config.ts')),
        )
        configureVisualRegression(on)
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.family === 'chromium') {
            launchOptions.args.push('--test-third-party-cookie-phaseout');
            return launchOptions;
          }
        }
      );
      },
    },
    component: {
      devServer: {
        framework: "react",
        bundler: "vite",
      },
      setupNodeEvents(on) {
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.family === 'chromium') {
            launchOptions.args.push('--test-third-party-cookie-phaseout');
            return launchOptions;
          }
        }
      );
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