import React from 'react';
import { Outlet } from 'react-router';
import {Box} from "@mui/system";
import Appbar from "@core/components/Navbar";

const LayoutMain = () => {

  return (
    <>
            <Appbar />
            <Outlet />
    </>
  );
}

export default LayoutMain;
