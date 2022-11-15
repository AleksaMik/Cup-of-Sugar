import React, {createContext, useContext, userContext} from "react";
import { userProductReducer } from './reducers'

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({ value= [], ...props}) =>{
    const [state, dispatch] = userProductReducer({
        items: [],
        categories: [],
        currentCategory: '',
    });
    return <Provider value={[state, dispatch]} {...props}/>;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext }; 