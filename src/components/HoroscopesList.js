import { useState, useEffect } from 'react'
import signs from '../context/signs'
import HoroscopeCard from './HoroscopeCard'
import {Container, Row } from 'reactstrap'

const HoroscopesList = () => {
const [horoscopes, setHoroscopes]= useState([])
const [day, setDay] = useState("today")

const fetchHoroscopes = async (day, signName, image) => {

    const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`
    const horoscopeResponse = await fetch(url,  {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_AZTRO_API_KEY
        }
    })
    // console.log("Here is horoscopeResponse:", horoscopeResponse)
    const horoscopeJson = await horoscopeResponse.json()

    horoscopeJson.sign = signName;
    horoscopeJson.image = image;

    
    // console.log("Here is horoscopeJson:", horoscopeJson)
        setHoroscopes(horoscopes => [...horoscopes, horoscopeJson])
        //when setting horoscopes im refering to the horscopes variable in use state 
        //for this horoscopes array i want to keep everythign in there and then add new json data 
        //how to add to an array in state react//
        //make one array with all 12 horoscopes returned in it 
        
    }


    useEffect( () => { 
        signs.forEach((sign) => {
                fetchHoroscopes( day, sign.name, sign.image,)  //mapping over signs array to return image and sign name 
                                                                //looping : on each iteration we are calling to the function to add to our array 
        })  

    }, [day]  )  //don't apply effect if there have been no changes to the day//


    useEffect(()=> {
        // console.log(horoscopes, "this should have all the horoscopes")

    },[horoscopes])

    console.log(horoscopes)

const allHoroscopes = horoscopes.map((item) =>{         //do .map in this functiona andd return the function in jsx to render on the component
    return(
        <HoroscopeCard 
        date_range={item.date_range}
        sign= {item.sign}
        image = {item.image}
        compatibility={item.compatibility}
        description={item.description}
        current_date={item.current_date }
        />
    )
})


const clickYesterday = () => {
    setHoroscopes([]) //set horoscops array to nothing so it only displays "yesterday" when state is set 
    setDay("yesterday")

}

const clickToday = () => {
    setHoroscopes([]) //set horoscops array to nothing so it only displays "yesterday" when state is set 
    setDay("today")

}

const clickTomorrow = () => {
    setHoroscopes([]) //set horoscops array to nothing so it only displays "yesterday" when state is set 
    setDay("tomorrow")

} 




    return(
        <>
        <section className="horoscopes-section">
        <Container>
    <div className="horoscopes-container">
        <h2 className="horoscopes-title">HOROSCOPES</h2>
        <p className="this-week">What's in the stars for you this week? For centuries humans have looked to the stars for guidance and wisdom.  Click a button below to display this weeks daily horoscopes. </p>

            <div className="button-container">
                <button type="button" className="button yesterday" onClick={()=> {clickYesterday()}}>Yesterday</button>
                <button type="button" className="button today" onClick={()=> {clickToday()}}>Today</button>
                <button type="button" className="button tomorrow"  onClick={()=> {clickTomorrow()}}>Tomorrow</button>
            
        </div>

        <div>
                <Row xl="3" xs="1">
                {allHoroscopes}
                </Row>
        </div>
    </div>
    </Container>
    </section> 
    </>

    )
}

export default HoroscopesList

//put .map in <HoroscopeCard to return all the cards?// 