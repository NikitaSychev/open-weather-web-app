import {FAIL, START, SUCCESS} from "../../constants";

export default (store: any) => (next: any) => async (action: any) => {
    const {currentAPI, callAPI, type, ...rest} = action;
    if (!currentAPI || !callAPI) return next(action);

    next({
        type: type + START,
        ...rest
    });

    try {
        const response = await fetch(currentAPI + callAPI);
        if (response && response.status !== 200) {
            const jsonRes = await response.json();
            return next({
                type: type + FAIL,
                error: jsonRes.message,
                ...rest
            });
        }
        const jsonRes = await response.json();

        next({
            type: type + SUCCESS,
            jsonRes,
            ...rest
        });
    } catch (error) {
        next({
            type: type + FAIL,
            error,
            ...rest
        });
    }
}