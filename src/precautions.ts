interface Axios {
    get(): void;
}

interface CustomError extends Error {
    response?: {
        data: any;
    }
}

declare const axios: Axios

(async () => {
    try {
        await axios.get();
    } catch(err: unknown) {
        const customErr = err as CustomError;
        console.error(customErr.response?.data)
        console.log(customErr.response?.data)
    }
})()

