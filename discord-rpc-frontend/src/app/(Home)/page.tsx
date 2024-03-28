import Link from 'next/link'
import '../global.css'
import './home.css'

const Home: React.FC = () => {
	return (
		<div className='container'>
			<h1 className='information'>
				This Discord RPC GUI is developed by <strong>webfryingpan</strong>
			</h1>
			<Link href='/configuration' className='begin'>
				Let's begin!
			</Link>
		</div>
	)
}

export default Home
