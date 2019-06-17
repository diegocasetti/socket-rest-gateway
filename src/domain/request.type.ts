export interface Request {
    id: number,
    uri: string;
    method: string;
    headers?: Array<string>
}