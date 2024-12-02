import PropTypes from 'prop-types';

const GrandSon = ({message}) => {
    return (
    <>
        <div className="gson">
            <h4>Grand Son {message.familyName}</h4>
        </div>
    </>
    )
}

GrandSon.propTypes = {
    message: PropTypes.shape({
        familyName: PropTypes.string.isRequired
    }).isRequired
}

export default GrandSon
