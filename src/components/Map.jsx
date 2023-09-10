import Loading from './Loading'
import Error from './Error'
import { useContext } from 'react'
import { StoreContext } from '@/context/StoreContext'
import WorldMap from 'react-svg-worldmap'
import { useWindowSize } from 'react-use'

const Map = () => {
    const { loading, error, data, selected, select, colors, lastColor, setLastColor } = useContext(StoreContext)
    const { width } = useWindowSize()

    const onClick = ({ countryCode, countryValue }) => {
        if (!countryValue) return
        select(countryCode)
        const filteredColors = colors.filter((color) => color !== lastColor)
        const fill = filteredColors[Math.floor(Math.random() * filteredColors.length)]
        setLastColor(fill)
    }

    const styleFunc = ({ countryCode, color, countryValue }) => {
        return {
            fill: selected === countryCode ? lastColor : color,
            fillOpacity: countryValue ? 1 : 0.2,
            stroke: countryValue && 'white',
            strokeWidth: countryValue && 1,
            strokeOpacity: countryValue && 0.3,
            cursor: countryValue ? 'pointer' : 'default'
        }
    }
    if (loading) return <Loading />
    if (error) return <Error message={error.message} />
    return (
        <WorldMap
            data={data.countries.map((country) => ({ country: country.code.toLowerCase(), value: country.emoji }))}
            color='#4b5563'
            size={width >= 1080 ? 1080 : width >= 960 ? 960 : width >= 720 ? 720 : width >= 560 ? 560 : 360}
            onClickFunction={onClick}
            backgroundColor='#1f2937'
            styleFunction={styleFunc}
        />
    )
}

export default Map
