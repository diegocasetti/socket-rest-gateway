
export interface TcpEventInterface {
    eventName: string;
    callback: (socket: any, data: any) => void;
}