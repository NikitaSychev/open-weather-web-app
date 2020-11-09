import {FAIL, START, SUCCESS} from "../../constants";

const serviceApi = (store: any) => (next: any) => async (action: any) => {
    const {currentAPI, callAPI, type, payload, ...rest} = action;
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
                payload,
                ...rest
            });
        }
        const jsonRes = await response.json();

        next({
            type: type + SUCCESS,
            jsonRes,
            payload,
            ...rest
        });
    } catch (error) {
        next({
            type: type + FAIL,
            error,
            payload,
            ...rest
        });
    }
}

export default serviceApi;