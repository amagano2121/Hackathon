import { useState, useEffect } from "react";
import { Person } from "./Person";

export const Directory = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        getPeople().then(listOfPeople => setPeople(listOfPeople));
    }, [])

    return (
        <>
            {people.map(person =>
                <Person {...person} key={person._id} />
            )}
        </>
    )
}

const getPeople = () => {
    const url = 'http://localhost:3004/directory'

    return fetch(url, { username: "Brown" })
        .then(res => res.json())
        .then(res => { console.log(res); return res })
}