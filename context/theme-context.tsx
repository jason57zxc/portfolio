"use client"
import React, { createContext, useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({ children }: Props) {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') as Theme | null
        if (localTheme) {
            setTheme(localTheme)
            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }

    }, [])

    return (
        <ThemeContext.Provider value={{
            theme, setTheme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}