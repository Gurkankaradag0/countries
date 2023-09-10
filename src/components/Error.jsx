import PropTypes from 'prop-types'

const Error = ({ message }) => {
    return <div className='bg-red-400 rounded-md mt-16 p-4 text-white text-lg font-semibold'>{message}</div>
}

Error.propTypes = {
    message: PropTypes.string
}

export default Error
