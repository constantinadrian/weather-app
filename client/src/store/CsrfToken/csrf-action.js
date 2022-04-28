import { SET_CSRF } from "./csrfActionTypes";

export const getCsrfToken = () => {
    return async (dispach) => {
        const csrfSendRequest = async () => {
            const response = await fetch(
                "/api/csrf", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    mode: 'cors',
                }
            )
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return data
        }
        try {
            const csrfToken = await csrfSendRequest()
            dispach({type: SET_CSRF, payload: csrfToken.csrfToken})
        } catch (error) {
            console.log(error.message);
        }
    }
}
