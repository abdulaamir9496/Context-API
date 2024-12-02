import PropTypes from 'prop-types';

const GrandDaugther = ({message}) => {
    return (
    <>
        <div className="gdaughter">
            <h4>Grand Daugther {message.familyName}</h4>
        </div>
    </>
    )
}

GrandDaugther.propTypes = {
    message: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
    }).isRequired
}

export default GrandDaugther
