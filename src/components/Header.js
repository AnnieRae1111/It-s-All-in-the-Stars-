import { useState, useEffect } from 'react'


const Header = () => {
const APIkey=  `LKKqCYuOSAZMKxhZYmxzS6pyuueWZVOU7HZfKphT`   
const url = `https://api.nasa.gov/planetary/apod?api_key=`
const url2 = url + APIkey
const [photo, setPhoto]= useState()

useEffect(() => {fetch(url2).then((res) => res.json())
    .then((json)=> setPhoto(json)).catch(console.error)}, []);

    console.log(photo)

if(!photo){
    return <p>Loading from space</p>
}

    return(
        <section className="photo-container">
        <header className="header">
        <h1 className="header"> IT'S ALL IN THE STARS</h1>
            <div className="image">
                <div className="image-card">
                    <img src="https://apod.nasa.gov/apod/image/2201/IMG_9447_1024.jpg"
                        alt="of the day"
                        />
                </div>
                <div className="photo-description">
                    <h2>This is the photo of the day</h2>
                </div>
            </div>
        </header>
        </section>
    )
}

export default Header