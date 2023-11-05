import React from "react";
import { useRouteError } from "react-router-dom";
import {Button} from "@nextui-org/react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";


export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
      <>
        <Box>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold", margin: 5 }}>
              Oops!
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              Sorry, an unexpected error has occurred.
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontStyle: "italic" }}
            >
              {error.statusText || error.message}
            </Typography>
          </Box>
        </Box>
      </>

  );
}
