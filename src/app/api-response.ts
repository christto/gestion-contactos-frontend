export interface ApiResponse<T> {
    success: boolean;
    message: string;
    result?: T;
    statusCode: number;
}

export function success<T>(message: string, statusCode: number): ApiResponse<T> {
    return { success: true, message, statusCode };
}

export function successWithResult<T>(message: string, result: T, statusCode: number): ApiResponse<T> {
    return { success: true, message, result, statusCode };
}

export function error<T>(message: string, statusCode: number): ApiResponse<T> {
    return { success: false, message, statusCode };
}

export function errorWithResult<T>(message: string, result: T, statusCode: number): ApiResponse<T> {
    return { success: false, message, result, statusCode };
}
