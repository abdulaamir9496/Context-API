import GrandSon from "./GrandSon"
import GrandDaugther from "./GrandDaugther"
import PropTypes from "prop-types"

const Child = ({message}) => {
    return (
    <>
        <div className="child">
            <h3>Child {message.familyName}</h3>
            <GrandSon message={message} />
            <GrandDaugther message={message} />
        </div>
    </>
    )
}

Child.propTypes = {
    message: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
    }).isRequired
}

export default Child
