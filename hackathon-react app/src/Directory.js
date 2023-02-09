let allPeople = []

export const Directory = () => {

    //const [people, setPeople] = useState([]);
    getPeople();

    return (
        <p>"Hello"</p>
    )
}

const getPeople = async () => {
    let url = 'http://localhost:3002/directory'

    allPeople = await fetch(url)
        .then(res => res.json())
        .then(res => { console.log(res); return res })

    console.log(allPeople);
}