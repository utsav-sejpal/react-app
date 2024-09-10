import PropTypes from 'prop-types';

function StudentComponent(props) {
    // console.log(props);
    return (
        <>
            {props.name} <br />
            {/* <h3>My Name is {props.name} </h3> */}
            {/* <h3>My Subject is {props.subject}</h3> */}
        </>
    )
}

StudentComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

// StudentComponent.defaultProps = {};

export default StudentComponent;