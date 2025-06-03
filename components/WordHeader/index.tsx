import ActionButtons from './ActionButtons'

interface WordHeadingProps {
    worditle: string,
}

const WordHeading = ({ worditle }: WordHeadingProps) => {
    return (
        <div className="min-w-0 mt-8 text-center">
            <h1 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight capitalize">
                {worditle}
            </h1>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <p className='text-white tracking-wider'>
                    {`/trænzˌlɪtəˈreɪʃən/`}
                </p>
            </div>
        </div>
    )
}



const WordHeader = ({ worditle }: WordHeadingProps) => {
    return (
        <div className="lg:flex lg:items-center lg:justify-between pt-10 bg-foreground">
            <WordHeading worditle={worditle} />
            <ActionButtons />
        </div>
    )
}

export default WordHeader