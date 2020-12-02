import persoReducer from "./persoReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    persoInfo: persoReducer
})

export default rootReducer