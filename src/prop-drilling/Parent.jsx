import Child from "./Child" 
import PropTypes from 'prop-types'

const Parent = ({message}) => {
    return (
    <>
        <div className="parent">
            <h2>Parent {message.familyName}</h2>
            <Child message={message}/>
        </div>
    </>
    )
}

// Add PropTypes validation
Parent.propTypes = {
    message: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
    }).isRequired
}

export default Parent
