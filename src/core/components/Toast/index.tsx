import React from 'react';
import {Check, Close, Info} from "@mui/icons-material";
import toast, {ErrorIcon} from "react-hot-toast";
import {IconButton, Paper} from "@mui/material";
import {Props} from "@core/components/Toast/interface";
import {Button} from "@nextui-org/react";

export default function Toast(props: Props) {
    const {message, t, type, onClick} = props;
    function getIcon() {
        switch (type.toLowerCase()) {
            case 'success':
                return <Check className="flex flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" />;
            case 'warning':
                return <Info className="inline-flex flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200" />;
            case 'error':
                return <Close className="inline-flex flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" />;
            case 'info':
                return <Info className="inline-flex flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200"/>;
            default:
                return <div className="inline-flex flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">🤔</div>
        }
    }

    return (

        <div className="justify-between flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
            <div>{getIcon()}</div>
            <div onClick={onClick}>
                <span className="flex ml-3 text-sm font-normal w-full justify-center content-center">{message}</span>
            </div>
            <div>
                <Button isIconOnly onClick={() => toast.remove(t.id)} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <Close />
                </Button>
            </div>
        </div>
    );
}