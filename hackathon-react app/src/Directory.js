export const Directory = () => {

    //const [people, setPeople] = useState([]);
    const people = fetch('localhost:3002/directory')
        .then(res => res.json())
        .then(res => console.log(res))
    console.log(people);

    return (
        <p>"Hello"</p>
    )
}