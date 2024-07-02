import './commands';
import { worker } from '../../src/mocks/browser';
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand({
  capture: 'fullPage'
})

before(() => {
  worker.start({
		onUnhandledRequest: 'bypass',
  });
});

afterEach(() => {
  worker.resetHandlers();
});

after(() => {
  worker.stop();
});
