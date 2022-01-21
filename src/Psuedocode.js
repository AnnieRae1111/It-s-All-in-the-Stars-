//Will need to set up components : 
    //App.js -main component that will make the NASA API call 
    // Header.js - component that will render site title and NASA photo of the day 
        //and description 
    //  Navigation.js - component that will render the Nav bar 
    // Horoscopes.js - component that will render the three horoscope buttons and 
    // make aztro api call 
    // Yesterday.js -component that will render 12 cards for the horoscopes of yesterday
            //pass param of {day}
   // Today.js -component that will render 12 cards for the horoscopes of today
        //pass param of {day}
   // Tomorrow.js -component that will render 12 cards for the horoscopes of tomorrow 
        //pass param of { day }
   //Horoscope cards: 
        //12 with an image attached to them along with the descriptoin 

    //12 signs: 
    //aquarius     libra
    //aries         scorpio
    //taurus        sagittarius
    //gemini        capricorn
    //cancer        aquarius
    //leo           pisces
    //virgo
    




//     {horoscopes.map((horoscope,idx)=>{
//      console.log(horoscope, "inside map")
//      return(
//          <>
//          <HoroscopeCard 
//          key={idx}
//          sign={horoscope.sign}
//          mood={horoscope.mood}
//          image={horoscope.image}
//          description={horoscope.description}
//          date_range={horoscope.date_range}
//          current_date={horoscope.current_date}
//          compatibility={horoscope.compatibility}
//          color={horoscope.color}
//          />
//          {/* <h1 key={idx}>{horoscope.sign}</h1>
//          <h1 key={idx}>{horoscope.mood}</h1>
//          <h1 key={idx}>{horoscope.image}</h1>
//          <h1 key={idx}>{horoscope.description}</h1>
//          <h1 key={idx}>{horoscope.date_range}</h1>
//          <h1 key={idx}>{horoscope.current_date}</h1>
//          <h1 key={idx}>{horoscope.compatibility}</h1>
//          <h1 key={idx}>{horoscope.color}</h1>
//          <h1>{idx}</h1> */}
//          <br/></>
//      )
//  })}


//Original fetch code : 
//// const fetchHoroscopes = async (day, signName, image) => { 
//     await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`, {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "addf17c4a4mshc34130c700cef07p1c7740jsn48f54a7eecb3"
// 	}
// })
// .then(response => {
// 	console.log(response);
//     return  response.json()
// })
// .then((json)=> {
//     // let name="aquarius"
//     // let image="https://i.imgur.com/gqwa1Rw.jpg"
//     json.sign= signName
//     json.image=image     ///adding more info / kew value pairs i need 
//     let newHoroscope = [json]
//     setHoroscopes([...horoscopes, ...newHoroscope]) //setting the horsocopes array to itself and then the new info added 

// })
// .catch(err => {
// 	console.error(err);
// });  }
