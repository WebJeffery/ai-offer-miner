"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const ThemeWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default ThemeWrapper;