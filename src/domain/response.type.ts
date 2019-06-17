import {Request} from '../../src/domain/request.type';

export interface Response {
    request: Request;
    status: {
        code: number;
        message: string;
    };
    headers: any;
    data?: any;
}