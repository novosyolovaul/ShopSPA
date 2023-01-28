import { combineReducers, legacy_createStore } from "redux";
import catalogReduser from "./CatalogReduser";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

let redusers = combineReducers({
    catalogPage: catalogReduser,

});

const persistedReducer = persistReducer(persistConfig, redusers)

let store = legacy_createStore(persistedReducer);
window.store = store;
export let persistor = persistStore(store);
export default store;