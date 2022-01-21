import { useState, useEffect } from 'react'
import signs from '../context/signs'
import HoroscopeCard from './HoroscopeCard'


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
    console.log("Here is registerResponse:", horoscopeResponse)
    const horoscopeJson = await horoscopeResponse.json()
    
    console.log("Here is registerJson:", horoscopeJson)
        setHoroscopes(horoscopeJson)

        
    }

    useEffect(() => {
        fetchHoroscopes()
    }, [])

console.log(horoscopes, "this should have all the horoscopes")

useEffect( () => { 
    signs.map((sign) => {
        return(
            fetchHoroscopes( day, sign.name, sign.image)  //mapping over signs array 

        )

    })  
console.log(horoscopes,"useEffect")

}, [day]  )



// useEffect(() => {fetch(url2).then((res) => res.json())
//     .then((json)=> setHoroscopes([...horoscopes, ...json])).catch(console.error)}, []);

    return(
    <div className="container">
        <h2 className="horoscopes-title">HOROSCOPES</h2>
        <div className="button-container">
            <button className="button yesterday">Yesterday</button>
            <button className="button today">Today</button>
            <button className="button tomorrow">Tomorrow</button>
        </div>
        <div>
        <HoroscopeCard 
        date_range= {horoscopes.date_range}
        image={signs.image} />

        </div>
    </div>

    )
}

export default HoroscopesList