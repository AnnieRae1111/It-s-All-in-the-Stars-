const About = () => {
	return (
		<div className='about-section'>
			<h2 className='thankyou-for-visiting'>Thank you for visiting! </h2>
			<p className='about-text'>
				This app is brought to you by NASA's Astrology Picutre of Day API and
				the Aztro API
				<br />
				Each day the astronomy photo of the day updates to a knew glimpse of the
				cosmos.
				<br />
				You can also check your daily horoscope with information that is pulled
				from the aztro API.
			</p>
			<div className='about-photo'>
				<img
					className='divine-feminine'
					src='https://i.imgur.com/ecEzLAj.jpg'
					alt='divine'
				/>
			</div>
		</div>
	);
};

export default About;
