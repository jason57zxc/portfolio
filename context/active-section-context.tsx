"use client"
import React, { createContext, useContext, useState } from 'react'
import { Section } from '@/lib/types'

type Props = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: Section,
    setActiveSection: React.Dispatch<React.SetStateAction<Section>>,
    timeLastClick: number,
    setTimeLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: Props) {
    const [activeSection, setActiveSection] = useState<Section>('Home')
    const [timeLastClick, setTimeLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection, setActiveSection,
                timeLastClick, setTimeLastClick
            }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}