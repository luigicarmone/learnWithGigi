import React, { useState } from 'react';
import { Outlet } from 'react-router';

const LayoutMain = () => {

  return (
    <>
        <Outlet />
    </>
  );
}

export default LayoutMain;
