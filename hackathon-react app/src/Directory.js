export const Directory = () => {
    fetch('localhost:3002/directory')
        .then(res => res.json())
        .then(res => console.log(res))

    return (
        <p>"Hello"</p>
    )
}