import {AppRegistry} from 'react-native';
import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import RootReducer from './src/Reducers';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

class Index extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Index);
