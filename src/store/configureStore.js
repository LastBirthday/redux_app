
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/AppReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );

    if (module.hot) {
        module.hot.accept('../reducers/AppReducer.js', () => {
            const nextRootReducer = require('../reducers/AppReducer.js');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;

}