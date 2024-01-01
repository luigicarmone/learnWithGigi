export interface T {
    id?: string,
}

export default interface Props{
    t?: T;
    type?: string | null;
    onClick?: (() => void) | null;
    message?: string | null;
}