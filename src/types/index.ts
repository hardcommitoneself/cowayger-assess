export type DataTimedOrder = {
    time: string;
    capacity: number;
    originialCapacity: number;
};

export type TimedOrder = {
    time: string;
    capacity: number;
    originialCapacity: number;
    booked: boolean;
}