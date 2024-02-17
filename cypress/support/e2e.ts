import './commands'
import { worker } from '../../src/mocks/browser';


before(() =>{
    worker.start({
      onUnhandledRequest: 'bypass'
    });
})

afterEach(() =>{
    worker.resetHandlers();
})

after(() =>{
   worker.stop();
})

