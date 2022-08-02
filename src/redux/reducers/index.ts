import { combineReducers } from "redux";
import user from './user.reducer'
import category from './category.reducer'
import item from './item.reducer'
import stateCategory from './stateCategory.reducer'
export const reducers=combineReducers({
    user,
    category,
    item,
    stateCategory
})