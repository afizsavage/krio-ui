'use client'

import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    DialogBackdrop,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useEffect, useState, useRef } from 'react'
import { getModel } from '@/lib/connector'
import { useRouter } from 'next/navigation'

export interface CommandPalettesProps {
    open: boolean
    setOpen: (args: boolean) => void
}

type ResponseData = {
    id: string
    word: string
    letter_id: string
}

const CommandPalettes = ({ open, setOpen }: CommandPalettesProps) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<ResponseData[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()

    useEffect(() => {
        if (open) {
            // Wait a tick for dialog transitions to complete
            const timeout = setTimeout(() => {
                inputRef.current?.focus()
            }, 100) // Try 100–150ms for smoothness

            return () => clearTimeout(timeout)
        }
    }, [open])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim() === '') {
                setResults([])
                return
            }

            getModel(`/search?q=${encodeURIComponent(query)}`)
                .then((res) => setResults(res.data))
                .catch((err) => console.error('Search error:', err))
        }, 300)

        return () => clearTimeout(delayDebounce)
    }, [query])

    return (
        <Dialog
            className="relative z-50"
            open={open}
            onClose={() => {
                setOpen(false)
                setQuery('')
            }}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-white/90 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-3.5 sm:p-6 md:p-20">
                <DialogPanel
                    transition
                    className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                >
                    <Combobox>
                        <div className="grid grid-cols-1">

                            <ComboboxInput
                                ref={inputRef}
                                type="text"
                                placeholder="Search krio words..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onBlur={() => setQuery('')}
                                className="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm"
                            />
                            <MagnifyingGlassIcon
                                className="pointer-events-none col-start-1 row-start-1 ml-4 size-4 self-center text-gray-400"
                                aria-hidden="true"
                            />
                            <kbd
                                className="mr-3 col-start-2 row-start-1 self-center tracking-wide inline-flex items-center rounded-md border border-gray-200 px-1.5 font-sans text-sm text-gray-400"
                                onClick={() => setOpen(false)}
                            >
                                esc
                            </kbd>
                        </div>

                        {results.length > 0 && (
                            <ComboboxOptions static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                {results.map((result) => (
                                    <ComboboxOption
                                        key={result.id}
                                        value={result}
                                        onClick={() => router.push(`words/${result.id}`)}
                                        className="cursor-default px-4 py-2 select-none data-focus:bg-zinc-800 data-focus:text-white data-focus:outline-hidden"
                                    >
                                        {result.word}
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        )}

                        {query !== '' && results.length === 0 && (
                            <p className="p-4 text-sm text-gray-500">No word found.</p>
                        )}
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default CommandPalettes
