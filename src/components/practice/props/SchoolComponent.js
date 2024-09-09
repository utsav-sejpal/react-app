import StudentComponent from "./StudentComponent";

export default function SchoolComponent() {
    const details = {
        name: "School",
        address: "123 Main St"
    }

    // details.address = 'ABC';
    return (
        <>
            <h1>This is School Component!</h1>
            {/* <StudentComponent name="Student 1" /> */}
            <StudentComponent details={details} />
            {/* <StudentComponent subject="React" /> */}
        </>
    )
}