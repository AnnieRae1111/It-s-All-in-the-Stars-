import { useState, useEffect } from 'react'

const Header = () => {
const API_KEY= process.env.REACT_APP_NASA_API_KEY  
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
                <p className="page-title-info">Want a glimpse into outerspace? Check out the Astronomy Photo of the Day brought to you by NASA.<br/>
                    Your daily reminder that we are actually just spinning in outerspace on a pale blue dot and anything is possible!  <br/>
                    </p>

                <div className="image">
                    <div className="image-card"> { (photo.media_type === "video") 
                                                    ? <iframe className="video-of-the-day" 
                                                    width="853"
                                                    height="480"
                                                    src={`https://www.youtube.com/embed/s6IpsM_HNcU?rel=`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"/> 
                                                    :  <img className="photo-of-the-day" src={photo.url}
                                                    alt="of the day"/> }
                        
                        

                                {/* // <img className="photo-of-the-day" src={photo.url}
                                // alt="of the day"
                                // />  */}
                    </div>
                <div className="photo-description-container">
                    <h2 className="about-this-photo"> About this image:</h2>
                    <p className="photo-title-info"><strong>Title:</strong> {photo.title}</p>
                    <p className="copyright-title-info"><strong>Credit: </strong>{photo.copyright}</p>
                    <p className="photo-explanation">{photo.explanation}</p> 
                </div>
            </div>
        </header>
        </section>
    )
}

export default Header