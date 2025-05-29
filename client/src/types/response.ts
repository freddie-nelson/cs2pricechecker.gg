export interface SuccessResponse<T> {
    success: true;
    data: T;
}

export interface ErrorResponse {
    success: false;
    reason: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
