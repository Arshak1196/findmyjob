import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from './rootReducer';

function saveToLocalStorage(store){
    try {
        const serializedStore = JSON.stringify(store)
        window.localStorage.setItem('store',serializedStore)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedStore = window.localStorage.getItem('store')
        if(serializedStore === null) return undefined
        return JSON.parse(serializedStore)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const peristedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    peristedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store