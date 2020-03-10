import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

function configureStore() {
    const store = applyMiddleware(thunk)(createStore)(reducers);

    if (module.hot) {
        module.hot.accept('./reducers', function() {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export {
    configureStore
};
