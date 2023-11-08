import React from "react";
import { useRouteError } from "react-router-dom";
import './index.css';

export default function BackgroundAnimation() {
    const error = useRouteError() as { statusText?: string; message?: string };
    console.error(error);

    return (
        <>
            <div className="area">
                <ul className="circles">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <li key={index}></li>
                    ))}
                </ul>
            </div>
            <div className='area2'>
                <div className='errorMessage'>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <p key={index} className='errorText text-white'>{error.statusText || error.message}</p>
                    ))}
                </div>
            </div>
        </>
    );
}
