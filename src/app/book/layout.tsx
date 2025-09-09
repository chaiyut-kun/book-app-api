import { Button, Box, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(fas, far, fab);

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="mt-6">
      <Box className="border-[0.5px] border-slate-800 rounded p-2 w-auto">
        <Button variant="contained" component="a" href="/" >
            <FontAwesomeIcon icon={faHouse} />
            <div>Home</div>
        </Button>
      </Box>
      <Box className="mt-8">{children}</Box>
    </Container>
  );
}

export default layout;
