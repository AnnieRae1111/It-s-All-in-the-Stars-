import { useState, useEffect } from 'react'
import signs from '../context/signs'
import HoroscopeCard from './HoroscopeCard'
import {Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Yesterday from './Yesterday'



const HoroscopesList = () => {

const [horoscopes, setHoroscopes]= useState([])
const [day, setDay] = useState("today")


const fetchHoroscopes = async (day, signName, image) => {

    const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`

    const horoscopeResponse = await fetch(url,  {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "addf17c4a4mshc34130c700cef07p1c7740jsn48f54a7eecb3"
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
        
    }


useEffect( () => { 
    signs.forEach((sign) => {
            fetchHoroscopes( day, sign.name, sign.image,)  //mapping over signs array to return image and sign name 
                                                            //looping : on each iteration we are calling to the function to add to our array 
    }, [])  
// console.log(horoscopes,"useEffect")


}, [day]  )  //don't apply effect if there have been no changes to the day//

useEffect(()=> {
    // console.log(horoscopes, "this should have all the horoscopes")

},[horoscopes])

console.log(horoscopes)

const allHoroscopes = horoscopes.map((item, index) =>{
    return(
        <HoroscopeCard 
        date_range={item.date_range}
        sign= {item.sign}
        image = {item.image}
        compatibility={item.compatibility}
        description={item.description}
        current_date={item.current_date}
        />
    )
})


//NEXT STEP: create a .map over horsocopes in state , on line 51 and for each map iteration return 
// a new horoscope component and 

// useEffect(() => {fetch(url2).then((res) => res.json())
//     .then((json)=> setHoroscopes([...horoscopes, ...json])).catch(console.error)}, []);


    return(
    <div className="container">
        <h2 className="horoscopes-title">HOROSCOPES</h2>
        <Link to={`/home/${day}`}>
            <div className="button-container">
                <button className="button yesterday" onClick={() => setDay("yesterday")}>Yesterday</button>
                <button className="button today" onClick={() => setDay("today")}>Today</button>
                <button className="button tomorrow"  onClick={() => setDay("tomorrow")}>Tomorrow</button>
            
        </div>
        </Link>    
        <div>
            <Container>
                <Row xl="3">
                {allHoroscopes}
                </Row>
            </Container>
            
        </div>
    </div>

    )
}

export default HoroscopesList

//put .map in <HoroscopeCard to return all the cards?// 