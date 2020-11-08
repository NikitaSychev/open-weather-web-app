import {AnyAction, Reducer} from "redux";
import {ISearchFieldState} from "./types";

const initialState: ISearchFieldState = {
    value: ''
}

const reducer: Reducer<ISearchFieldState> = (state: ISearchFieldState = initialState, action: AnyAction) => {
    switch (action.type){
        default: {
            return state
        }
    }
};

export {reducer as SearchStringReducer};