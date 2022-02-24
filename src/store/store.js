import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./reducers/cityReducer"

export default configureStore ({
    reducer: {
        city: cityReducer
    }
})