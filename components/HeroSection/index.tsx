'use client'

import { useState } from 'react'
import CommandPalettes from '../CommandPalettes'
import SearchBar from './Searchbar'

const HeroSection = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-foreground w-full">

            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-56">
                    <SearchBar setOpen={setOpen} />
                </div>
            </div>
            <CommandPalettes open={open} setOpen={setOpen} />
        </div>
    )
}

export default HeroSection