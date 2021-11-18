
export const getDataFromLocalStorage = (key) => {
    
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        throw new Error(error)
    }
}

export const writeDataToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error(error)
    }
}