import Footer from '@components/footer'
import Header from '@components/header'
import '@styles/global.css'
import '@styles/pages/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<h1 className='information'>
					This Discord RPC GUI is developed by <strong>webfryingpan</strong>
				</h1>
				<Link className='begin' to='configuration'>
					Let`s begin!
				</Link>
			</div>
			<Footer />
		</>
	)
}

export default Home
