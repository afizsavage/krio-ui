import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { CommandPalettesProps } from '../CommandPalettes';

type SearchBar = Pick<CommandPalettesProps, 'setOpen'>;

const SearchBar = ({ setOpen }: SearchBar) => {

    return (
        <div>

            <div className="mt-2 flex">
                <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
                    <input
                        id="query"
                        name="query"
                        type="text"
                        placeholder="Search krio word..."
                        className="col-start-1 row-start-1 block w-full rounded-4xl bg-white py-3 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:pl-9 sm:text-sm/6"
                        onClick={() => setOpen(true)}
                        readOnly
                    />
                    <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>

            </div>
        </div>
    )
}

export default SearchBar