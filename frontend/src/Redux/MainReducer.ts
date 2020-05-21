import { combineReducers } from 'redux'
import { NavigationReducer}  from '../Modules/TopNavigation/reducers'

export const reducer = combineReducers({
	navigation: NavigationReducer
})


