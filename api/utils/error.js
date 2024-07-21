export const errorHandler = (statusCode,message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.meesage = message;
    return error;
}