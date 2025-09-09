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
        <Button variant="outlined" component="a" href="/" className="flex items-center gap-2 h-12">
            <FontAwesomeIcon icon={faHouse} className="w-5 h-5"/>
            <div className="text-lg mt-1">Home</div> 
        </Button>
      </Box>
      <Box className="mt-8">{children}</Box>
    </Container>
  );
}

export default layout;
