import { useState, useEffect } from 'react';
import signs from '../context/signs';
import HoroscopeCard from './HoroscopeCard';
import { Container, Row } from 'reactstrap';

const HoroscopesList = () => {
	const [horoscopes, setHoroscopes] = useState([]);
	const [day, setDay] = useState('today');

	const fetchHoroscopes = async (day, signNames, images, dateRange) => {
		const requests = signNames.map((signName) => ({
			url: `https://horostory.p.rapidapi.com/horoscope?sign=${signName}&date=${day}`,
			headers: {
				'x-rapidapi-host': 'horostory.p.rapidapi.com',
				'x-rapidapi-key': '9541da9a38mshccddc47c3ebacf3p126708jsn5621aaa8b36b',
			},
		}));

		try {
			const horoscopeJsons = [];
			let currentIndex = 0;

			const makeRequest = async () => {
				if (currentIndex >= requests.length) {
					return;
				}

				const batch = requests.slice(currentIndex, currentIndex + 10);
				currentIndex += 10;

				const responses = await Promise.all(
					batch.map((req) => fetch(req.url, { headers: req.headers }))
				);
				const batchHoroscopes = await Promise.all(
					responses.map((res) => res.json())
				);

				batchHoroscopes.forEach((horoscopeJson, i) => {
					horoscopeJson.sign = signNames[currentIndex - 10 + i];
					horoscopeJson.image = images[currentIndex - 10 + i];
					horoscopeJson.dateRange = dateRange[currentIndex - 10 + i];
				});

				horoscopeJsons.push(...batchHoroscopes);
				setHoroscopes((horoscopes) => [...horoscopes, ...batchHoroscopes]);

				setTimeout(makeRequest, 100);
			};

			makeRequest();
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		const signNames = signs.map((sign) => sign.name);
		const images = signs.map((sign) => sign.image);
		const dateRange = signs.map((sign) => sign.dateRange);

		fetchHoroscopes(day, signNames, images, dateRange);
	}, [day]);

	const allHoroscopes = horoscopes.map((item) => {
		return (
			<HoroscopeCard
				key={item.date_range}
				date_range={item.dateRange}
				sign={item.sign}
				image={item.image}
				compatibility={item.compatibility}
				description={item.description}
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
