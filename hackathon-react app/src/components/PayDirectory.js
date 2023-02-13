import { useState, useEffect } from "react";
import { Person } from "./Person";

export const PayDirectory = ({ foo }) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        getPeople().then(listOfPeople => setPeople(listOfPeople));
    }, [foo])

    return (
        <>
            {people.map(person =>
                <Person {...person} key={person._id} />
            )}
        </>
    )
}

const getPeople = () => {
    /* let { storedUN, storedPW } = localStorage.getItem('token')
    console.log("storedUN", storedUN)
    console.log("storedPW", storedPW) */
    const creds = JSON.parse(localStorage.getItem('token'))
    const url = 'http://localhost:3004/directory/' + creds.username
    return fetch(url, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "username": creds.username,
            "password": creds.password
        }
    })
        .then(res => res.json())
        .then(res => { console.log(res); return res })
}