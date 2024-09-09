function StudentComponent(props) {
    // console.log(props);
    return (
        <>
            {props.details.name} <br />
            {props.details.address}
            {/* <h3>My Name is {props.name} </h3> */}
            {/* <h3>My Subject is {props.subject}</h3> */}
        </>
    )
}

export default StudentComponent;