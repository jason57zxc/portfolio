import React from 'react'
import ThemeSwitcher from './theme-switcher'
import LocaleSwitcher from './locale-switcher'

type Props = {}

export default function SwitchGroup({ }: Props) {
    return (
        <div className="fixed bottom-5 right-3 grid gap-2.5">
            <LocaleSwitcher />
            <ThemeSwitcher />
        </div>
    )
}