import {
    ArrowLeftIcon
} from '@heroicons/react/20/solid'



const WordsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <button className="-m-1.5 p-1.5 text-white flex items-center gap-x-2">
                            <ArrowLeftIcon className='size-5' /> <span className='text-sm'>Back</span>
                        </button>
                    </div>
                </nav>
            </header>
            {children}
        </div>
    );
}

export default WordsLayout