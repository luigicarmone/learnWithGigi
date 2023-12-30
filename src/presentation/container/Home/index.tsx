import React from 'react'
import FirstTry from "@core/components/threejs/firstTry";
import {useTranslate} from "@tolgee/react";

export default function Home() {

    const {t} = useTranslate();
    return (
        <>
            <h1>Home</h1>
            <h1>First Try:</h1>
            <FirstTry />
            <span>a classic cube, made in 2023/11/05</span>
        </>
    )
}
