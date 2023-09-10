import { createContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { getCountries } from '@/services/schemas'
import { searchMatcher } from '@/libs/helpers'

export const StoreContext = createContext()

const colors = ['green', 'red', 'purple', 'pink', 'brown', 'violet']

const Store = ({ children }) => {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lastColor, setLastColor] = useState(colors[0])

    const { error, data: response } = useQuery(getCountries)

    const data = useMemo(() => {
        if (!response) return null
        loading && setLoading(false)
        if (!search) {
            setSelected(response.countries[9].code)
            return response
        }

        const matches = searchMatcher(search)

        if (matches?.search) {
            setSelected(null)
            const val = matches.search.toLowerCase()
            const countries = response.countries.filter((country) => country.name.toLowerCase().includes(val))
            if (countries.length > 0) {
                const tenth = countries.length > 9 ? countries[9] : countries[countries.length - 1]
                setSelected(tenth.code)
            }

            return { countries }
        }

        setSelected(response.countries[9].code)
        return response
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, response])

    useEffect(() => {
        if (error) setLoading(false)
    }, [error])

    const context = {
        loading,
        error,
        search,
        setSearch,
        data,
        selected,
        colors,
        lastColor,
        setLastColor,
        select: (code) => (selected === code ? setSelected(null) : setSelected(code))
    }

    return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
}

Store.propTypes = {
    children: PropTypes.node
}

export default Store
