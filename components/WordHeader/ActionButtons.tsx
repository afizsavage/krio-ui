import { ReactElement } from "react"
import { ShareIcon, SpeakerWaveIcon, StarIcon } from '@heroicons/react/24/outline'

interface ActionButtonProps {
    buttonIcon: ReactElement
}

const ActionButton = ({ buttonIcon }: ActionButtonProps) => {
    return (
        <button
            type="button"
            className="rounded-md bg-white/30 p-2.5 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {buttonIcon}
        </button>
    )
}

const ActionButtons = () => {
    return (
        <div className="py-5 flex justify-center gap-x-3 lg:mt-0 lg:ml-4 ">
            <ActionButton buttonIcon={<SpeakerWaveIcon aria-hidden="true" className="size-5" />} />
            <ActionButton buttonIcon={<StarIcon aria-hidden="true" className="size-5" />} />
            <ActionButton buttonIcon={<ShareIcon aria-hidden="true" className="size-5" />} />
        </div>
    )
}

export default ActionButtons