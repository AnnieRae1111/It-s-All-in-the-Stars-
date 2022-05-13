import { useState, useEffect } from 'react';
import signs from '../context/signs';
import HoroscopeCard from './HoroscopeCard';
import { Container, Row } from 'reactstrap';

const HoroscopesList = () => {
	const [horoscopes, setHoroscopes] = useState([]);
	const [day, setDay] = useState('today');

	const fetchHoroscopes = async (day, signName, image) => {
		const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`;
		const horoscopeResponse = await fetch(url, {
			method: 'POST',
			headers: {
				'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_AZTRO_API_KEY,
			},
		});

		const horoscopeJson = await horoscopeResponse.json();
		horoscopeJson.sign = signName;
		horoscopeJson.image = image;

		setHoroscopes((horoscopes) => [...horoscopes, horoscopeJson]);
		//creating 1 array with all 12 horoscopes
	};

	useEffect(() => {
		signs.forEach((sign) => {
			fetchHoroscopes(day, sign.name, sign.image); //mapping over signs.json array
		});
	}, [day]);

	const allHoroscopes = horoscopes.map((item) => {
		return (
			<HoroscopeCard
				key={item.date_range}
				date_range={item.date_range}
				sign={item.sign}
				image={item.image}
				compatibility={item.compatibility}
				description={item.description}
				current_date={item.current_date}
			/>
		);
	});
	console.log(horoscopes, 'horoscopes');

	const clickYesterday = () => {
		setHoroscopes([]); //set horoscops array to nothing so it only displays "yesterday" when state is set
		setDay('yesterday');
	};

	const clickToday = () => {
		setHoroscopes([]);
		setDay('today');
	};

	const clickTomorrow = () => {
		setHoroscopes([]);
		setDay('tomorrow');
	};

	return (
		<>
			<section className='horoscopes-section'>
				<Container>
					<div className='horoscopes-container'>
						<h2 className='horoscopes-title'>HOROSCOPES</h2>
						<p className='this-week'>
							Astrology is the study of the movement of the planets and the
							stars and how they influence us in our daily lives. For centuries
							humans have looked to the stars for guidance and wisdom. What's in
							the stars for you this week? Click a button below to display this
							weeks daily horoscopes.{' '}
						</p>

						<div className='button-container'>
							<button
								type='button'
								className='button yesterday'
								onClick={() => {
									clickYesterday();
								}}
							>
								Yesterday
							</button>
							<button
								type='button'
								className='button today'
								onClick={() => {
									clickToday();
								}}
							>
								Today
							</button>
							<button
								type='button'
								className='button tomorrow'
								onClick={() => {
									clickTomorrow();
								}}
							>
								Tomorrow
							</button>
						</div>

						<div>
							<Row xl='3' xs='1'>
								{allHoroscopes}
							</Row>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default HoroscopesList;
