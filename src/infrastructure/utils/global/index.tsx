import Toast from "@core/components/Toast/index";
import React from "react";
import toast from 'react-hot-toast';
import {FeedbackNotificationConfig, Payload} from "@infrastructure/utils/global/interface";

function useLanguage(): string {
    return localStorage.getItem('language') ?? 'it';
}

function setLanguage(language: string): void {
    localStorage.setItem('language', language);
}

interface LanguageOption {
    value: string;
    label: string;
    icon: string;
}

function getLanguages(): LanguageOption[] {
    return [
        { value: 'it', label: 'tr_italian', icon: 'it' },
        { value: 'en', label: 'tr_english', icon: 'gb' },
        { value: 'es', label: 'tr_spanish', icon: 'es' },
        { value: 'fr', label: 'tr_french', icon: 'fr' },
    ];
}

function feedbackNotification(configuration: FeedbackNotificationConfig): void {
    const { code = 500, type = null, onClick = null, duration = 5000 } = configuration;
    const message = configuration?.message ? configuration?.message?.toString().substring(0, 200) : '';

    let payload: Payload = {};

    switch (code) {
        case 200:
            payload = {
                type: type || 'success',
                message: message || 'Operazione avvenuta con successo!',
            };
            break;
        case 400:
            payload = {
                type: type || 'warning',
                message: message || "Ci sono stati problemi durante l'operazione!",
            };
            break;
        case 404:
            payload = {
                type: type || 'warning',
                message: message || 'Infomazioni non trovate!',
            };
            break;
        case 500:
            payload = {
                type: type || 'error',
                message: message || "Siamo spiacenti, non è stato possibile eseguire l'operazione.",
            };
            break;
        default:
            payload = {
                type: type || 'info',
                message: message || '🤔',
            };
    }

    toast.custom(
        (t) => (
            <Toast message={payload.message} type={payload.type || 'error'} t={t} onClick={onClick} />
        ),
        {
            duration,
            position: 'top-right',
        }
    );
}

export { useLanguage, setLanguage, getLanguages, feedbackNotification };
