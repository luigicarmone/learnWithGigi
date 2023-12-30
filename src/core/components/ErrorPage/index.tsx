import React from "react";
import { useRouteError } from "react-router-dom";
import Appbar from "@core/components/Navbar";
import { AnimatedText } from "@core/components/AnimatedText/Basic";
import BackgroundAnimation from "@core/components/ErrorPage/Background";
import {useTranslate} from "@tolgee/react";

export default function ErrorPage() {
    const {t} = useTranslate();
    const error = useRouteError() as { statusText?: string; message?: string };

  return (
      <>
        <Appbar />
        <BackgroundAnimation />
          <div className={'h-screen flex items-center justify-center flex-col gap-10 overflow-hidden'}>
              <AnimatedText once text="Oops!" className="font-extrabold leading-none tracking-tight sm:px-48 md:text-5xl lg:text-6xl text-white" />
              <p className={'text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-white'}>
                  {t('tr_errorPage')}
              </p>
              <p className={'text-lg font-normal text-red-500 lg:text-xl sm:px-16 xl:px-48 italic'}>
                  {error.statusText || error.message}
              </p>
          </div>
      </>
  );

}


