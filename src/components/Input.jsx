import { StoreContext } from '@/context/StoreContext'
import { useContext } from 'react'

const Input = () => {
    const { search, setSearch } = useContext(StoreContext)
    return (
        <>
            <input
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='rounded-md py-2 px-4 placeholder:text-gray-300 bg-gray-600 font-medium text-lg leading-none outline-none my-4'
            />
        </>
    )
}

export default Input
