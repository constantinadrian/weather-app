const checkIfJson = (responseData) => {
    try {
        const dataIsObj = JSON.parse(responseData);
        if (dataIsObj && typeof dataIsObj === "object") {
            return true;
        }
    } catch (e) {
        return false;
    }
    return false;
};

export default checkIfJson;
