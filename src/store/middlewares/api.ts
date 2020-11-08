import {FAIL, MOCK_API, START, SUCCESS} from "../../constants";

export default (store: any) => (next: any) => async (action: any) => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    try {
        const response = await fetch(MOCK_API + callAPI)
        const jsonRes = await response.json()

        next({
            type: type + SUCCESS,
            jsonRes,
            ...rest
        })
    } catch (error) {
        next({
            type: type + FAIL,
            error,
            ...rest
        })
    }
}