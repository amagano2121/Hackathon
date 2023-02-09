export const Person = ({ first_name, last_name, phone, location, role, salary }) => {
    return (
        <>
            <p>{first_name} {last_name} from {location} makes {salary}</p>
        </>
    )
}