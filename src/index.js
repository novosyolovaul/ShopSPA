import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store, { persistor } from './Redux/Store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <App store={store} state={store.getState()} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

