import { useActiveSectionContext } from "@/context/active-section-context"
import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Section } from "./types"
import { ThemeContext } from "@/context/theme-context"

type useSectionInViewProps = {
    section: Section;
    threshold?: number
}

export function useSectionInView({
    section,
    threshold = 0.5
}: useSectionInViewProps) {

    const { ref, inView } = useInView({
        threshold
    })
    const { setActiveSection, timeLastClick } = useActiveSectionContext()

    useEffect(() => {
        const time = Date.now() - timeLastClick
        inView && (time > 750) ? setActiveSection(section) : ''
    }, [inView, setActiveSection, section, timeLastClick])

    return {
        ref,
        inView,
    }
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error(`Theme context is not available`)
    }

    return context
}