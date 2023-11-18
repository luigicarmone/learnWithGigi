import React from "react";
import { useRouteError } from "react-router-dom";
import Appbar from "@core/components/Navbar";
import { AnimatedText } from "@core/components/AnimatedText";
import BackgroundAnimation from "@core/components/ErrorPage/Background";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
      <>
        <Appbar />
        <BackgroundAnimation />
          <div className={'h-screen flex items-center justify-center flex-col gap-10 overflow-hidden'}>
              <AnimatedText once text="Oops!" className="font-extrabold leading-none tracking-tight sm:px-48 md:text-5xl lg:text-6xl text-white" />
              <p className={'text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white'}>
                  Sorry, an unexpected error has occurred.
              </p>
              <p className={'text-lg font-normal text-red-500 lg:text-xl sm:px-16 xl:px-48 italic'}>
                  {error.statusText || error.message}
              </p>
          </div>
      </>
  );

}


