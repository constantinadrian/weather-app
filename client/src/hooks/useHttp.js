import { useState, useCallback } from "react";
import checkIfJson from "../helpers/checkIfJson";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                credentials: requestConfig.credentials ? requestConfig.credentials : 'include',
                mode: requestConfig.mode ? requestConfig.mode : 'cors',
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });

            const responseText = await response.text();

            if (!response.ok && checkIfJson(responseText)) {
                const data = JSON.parse(responseText);
                throw new Error(data.result.error.message);
            }
            else if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = JSON.parse(responseText);

            applyData(data.result);

        } catch (exception) {
            // map the error https://github.com/github/fetch/issues/203#issuecomment-408665082
            setError(
                new Map([
                    [TypeError, "There was a problem fetching the response."],
                    [SyntaxError, "There was a problem parsing the response."],
                    [Error, exception.message],
                ]).get(exception.constructor)
            );
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;