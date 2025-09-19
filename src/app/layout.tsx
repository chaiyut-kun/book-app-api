"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, Button, Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import AuthProvider from '@/contexts/AppContext';
import { AccountProfile } from "./component/AccountProfile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased mb-8`}
      >
        <AuthProvider >
          <Container className="mt-6 mb-2 flex-col items-center gap-4" sx={{}}>
            <Box className="border-[0.5px] border-slate-800 rounded p-2 w-auto
            flex items-center justify-between gap-2">
              <Button
                variant="outlined"
                component="a"
                href="/"
                className="flex items-center gap-2 h-12"
              >
                <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
                <div className="text-lg mt-1">Home</div>
              </Button>
            <Box className="flex items-center gap-2 mr-2">
              {/* user profile */}
              <AccountProfile />
            </Box>
            </Box>
          </Container>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
