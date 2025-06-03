"use client"

import {
    ArrowLeftIcon
} from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';

const Navigation = () => {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <button
                        className="-m-1.5 p-1.5 text-white flex items-center gap-x-2"
                        onClick={goBack}
                    >
                        <ArrowLeftIcon className='size-5' /> <span className='text-sm'>Back</span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navigation