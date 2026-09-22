"use client"

import * as React from "react"
import {
    ThemeProvider as NextThemesProvider,
    type ThemeProviderProps,
} from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            {...props}
            attribute="data-theme"
            defaultTheme="light"
            enableSystem={false}
            enableColorScheme={false}
        >
            {children}
        </NextThemesProvider>
    )
}