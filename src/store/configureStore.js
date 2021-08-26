import { createStore, combineReducers} from 'redux'
import BlogReducers from '../reducers/BlogReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        blogs : BlogReducers,
    }))
    return store
}

export default configureStore