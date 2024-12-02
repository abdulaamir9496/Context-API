import Parent from './Parent';
import PropTypes from 'prop-types';

const Family = ({message}) => {
    console.log(message)
    return (
    <>
        <div className='family'>
            <Parent message={message}/>
        </div>
    </>
    )
}

// Add PropTypes validation
Family.propTypes = {
    message: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
    }).isRequired
}

export default Family
