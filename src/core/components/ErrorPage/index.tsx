import React from "react";
import { useRouteError } from "react-router-dom";
import {Button} from "@nextui-org/react";


export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
      <>
        <Button color="primary">
          Buttona
        </Button>
        <div>
          <div>
            <h3 color='primary' style={{ fontWeight: "bold", margin: 5 }}>
              Oops!
            </h3>

            <h1 style={{ fontStyle: "italic" }}>
              Sorry, an unexpected error has occurred.
            </h1>
            <h1
                style={{ fontStyle: "italic" }}
            >
              {error.statusText || error.message}
            </h1>
          </div>
        </div>
      </>

  );
}
