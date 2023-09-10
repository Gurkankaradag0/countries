import { Hourglass } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='mt-16'>
            <Hourglass
                visible={true}
                height='80'
                width='80'
                colors={['#4b5563', '#4b5563']}
            />
        </div>
    )
}

export default Loading
