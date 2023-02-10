export const Person = ({ first_name, last_name, phone, location, role, salary }) => {
    return (
        <>
            <p>{first_name} {last_name}, {role}, {location} {(salary) ? `makes ` + salary : ``}</p>
        </>
    )
}