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
import { useRouter } from 'next/navigation'
import { ClockIcon } from '@heroicons/react/24/outline'

import { getModel } from '@/lib/connector'
import { addToSearchHistory, getSearchHistory } from '@/utils/searchHistory'
import { WordResponseData, SearchResult } from '@/@types'
import { CombinedSearchResult, combineSearchResults } from '@/utils/combineSearchResults'

export interface CommandPalettesProps {
    open: boolean
    setOpen: (args: boolean) => void
}

const CommandPalettes = ({ open, setOpen }: CommandPalettesProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()

    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState<WordResponseData[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [history, setHistory] = useState<SearchResult[]>([])
    const [combinedResults, setCombinedResults] = useState<CombinedSearchResult[]>([])
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);



    const handleSearch = (searchSearchResult: SearchResult) => {
        if (searchSearchResult.id.trim() === '') return

        addToSearchHistory(searchSearchResult)
        setHistory(getSearchHistory())
    }

    const redirectToWordPage = (wordId: string) => {
        router.push(`words/${wordId}`)
    }

    const handleQueryClick = (searchSearchResult: SearchResult) => {
        setOpen(false)
        handleSearch(searchSearchResult)
        redirectToWordPage(searchSearchResult.id)
    }

    useEffect(() => {
        setHistory(getSearchHistory())
    }, [])

    useEffect(() => {
        const history = getSearchHistory()
        const results = combineSearchResults(history, searchResult)

        // Filter combined results based on query
        const filteredResults = results.filter((result) =>
            result.result?.title?.toLowerCase().includes(query.toLowerCase())
        )

        setCombinedResults(filteredResults)
    }, [searchResult, query])

    useEffect(() => {
        if (open) {
            const timeout = setTimeout(() => {
                inputRef.current?.focus()
            }, 100)

            return () => clearTimeout(timeout)
        }
    }, [open])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim() === '') {
                setSearchResult([]);
                setHasSearched(false); // Reset this too
                setLoading(false);
                return;
            }

            setLoading(true);

            getModel(`/search?q=${encodeURIComponent(query)}`)
                .then((res) => {
                    setSearchResult(res.data);
                    setHasSearched(true); // Only set this after receiving response
                })
                .catch((err) => {
                    console.error('Search error:', err);
                    setHasSearched(true); // Even on error, we attempted
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);

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
                                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400"
                                aria-hidden="true"
                            />
                            <kbd
                                className="mr-3 col-start-2 row-start-1 self-center tracking-wide inline-flex items-center rounded-md border border-gray-200 px-1.5 font-sans text-sm text-gray-400"
                                onClick={() => setOpen(false)}
                            >
                                esc
                            </kbd>
                        </div>
                        <ComboboxOptions static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                            {combinedResults.map((combined) => (
                                <ComboboxOption
                                    key={combined.result.id}
                                    value={combined.result.id}
                                    onClick={() => handleQueryClick({ id: combined.result.id, title: combined.result.title })}
                                    className="cursor-default px-4 py-3 select-none flex items-center gap-x-2"
                                >
                                    <span className='p-1 rounded-full bg-gray-50'>
                                        {combined.source === 'api' ? (
                                            <MagnifyingGlassIcon className='size-4 text-gray-400' aria-hidden="true" />
                                        ) : (
                                            <ClockIcon className='size-4 text-gray-400' aria-hidden="true" />
                                        )}
                                    </span>
                                    {combined.result.title}
                                </ComboboxOption>
                            ))}

                            {hasSearched && !loading && query.trim() !== '' && combinedResults.length === 0 && (
                                <div className="px-4 py-2 text-gray-500">No results for {`"${query}"`}</div>
                            )}
                        </ComboboxOptions>
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default CommandPalettes
