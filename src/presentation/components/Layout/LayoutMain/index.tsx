import React from 'react';
import { Outlet } from 'react-router';
import {Box} from "@mui/system";
import Appbar from "@core/components/Navbar";

const LayoutMain = () => {

  return (
    <>
        <Box>
            <Appbar />
            <Outlet />
        </Box>
    </>
  );
}

export default LayoutMain;
