import React from 'react'
import FirstTry from "@core/components/threejs/firstTry";
import {Box} from "@mui/system";
export default function Home() {

    return (
        <>
            <h1>Home</h1>
            <h1>First Try:</h1>
            <Box sx={{width:30, height:30}}>
                <FirstTry />
            </Box>
            <span>a classic cube, made in 11/05/2023</span>
        </>
    )
}
