import Spinner from './assets/spinner.gif';

const Spin = () => {
	return (
		<div className='spin-loading'>
			<img width={180} className='mg-auto' src={Spinner} alt='loading' />
		</div>
	);
};

export default Spin;
