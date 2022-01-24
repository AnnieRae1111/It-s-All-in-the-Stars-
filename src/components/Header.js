import { useState, useEffect } from 'react'
import HoroscopesList from './HoroscopesList'


const Header = () => {
// const API_KEY= process.env.REACT_APP_NASA_API_KEY  
const API_KEY='LKKqCYuOSAZMKxhZYmxzS6pyuueWZVOU7HZfKphT'
const url = `https://api.nasa.gov/planetary/apod?api_key=`
const url2 = url + API_KEY
const [photo, setPhoto]= useState({})
console.log(url2)
console.log(photo)


useEffect(()=> {
    fetch(url2)
    .then((res)=> {
        console.log(res)
        return res.json()
    })
    .then((json)=>{
        console.log(json)
        setPhoto(json)
    })
}, [])     //[] indicates that all of these tasks within the useEffect will run 
            //on the initial component render 

console.log(photo)

useEffect(()=> {(console.log(photo))}, [photo])    //this second useEffect will fire on the initial component render and tracks if there is change 
                                                    //to the photo 
                                                    //component will render anytime there is change to state 

if(!photo){
    return <p>Loading from space</p>
}

    return(
        <section className="photo-container">
        <header className="header">
        <h1 className="header-title"> IT'S ALL IN THE STARS</h1>
        <p className="page-title-info">Check out the Astronomy Photo of the Day brought to you by NASA</p>
            <div className="image">
                <div className="image-card">
                    <img className="photo-of-the-day" src={photo.url}
                        alt="of the day"
                        />
                </div>
                <div className="photo-description-container">
                    <h2 className="about-this-photo"> About this image:</h2>
                    <p className="photo-explanation">{photo.explanation}</p>  
                    {/* will replace this with the actual description */}
                </div>
            </div>
        </header>
        <section className="horoscopes-section">
        <HoroscopesList />
        </section>
        </section>
    )
}

export default Header