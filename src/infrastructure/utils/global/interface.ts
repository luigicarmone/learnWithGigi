export interface FeedbackNotificationConfig {
    code?: number;
    type?: string | null;
    onClick?: (() => void) | null;
    duration?: number;
    message?: string | null;
}

export interface Payload {
    type?: string | null;
    message?: string | null;
}

