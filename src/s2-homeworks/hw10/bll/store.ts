import { loadingReducer } from './loadingReducer'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

export const store = createStore(reducers)

// export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
