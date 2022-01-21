import { useState, useEffect } from 'react'
import signs from '../context/signs'

const Horoscopes = () => {
const [horoscopes, setHoroscopes]= useState([])
const [day, setDay] = useState("today")

const fetchHoroscopes = async (day, signName, image) => { 
    await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`, {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "addf17c4a4mshc34130c700cef07p1c7740jsn48f54a7eecb3"
	}
})
.then(response => {
	console.log(response);
    return  response.json()
})
.then((json)=> {
    // let name="aquarius"
    // let image="https://i.imgur.com/gqwa1Rw.jpg"
    json.sign= signName
    json.image=image     ///adding more info / kew value pairs i need 
    let newHoroscope = [json]
    setHoroscopes([...horoscopes, ...newHoroscope]) //setting the horsocopes array to itself and then the new info added 

})
.catch(err => {
	console.error(err);
});  }

useEffect( () => { 
    signs.map((sign) => {
        return(
            fetchHoroscopes(day, sign.name, sign.image)

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
            {horoscopes.map((horoscope,idx)=>{
                console.log(horoscope, "inside map")
                return(
                    <>
                    <h1 key={idx}>{horoscope.sign}</h1>
                    <h1>{idx}</h1>
                    <br/></>
                )
            })}
        </div>
    </div>

    )
}

export default Horoscopes