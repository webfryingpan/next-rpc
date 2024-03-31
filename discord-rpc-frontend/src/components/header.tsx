import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@styles/components/header.css'
import { Link } from 'react-router-dom'

interface HeaderProps {
	children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className='header'>
			<div style={{ display: 'flex', columnGap: '20px' }}>
				<Link to='/'>
					<h1 className='heading'>Discord RPC</h1>
				</Link>
				<Link target='blank' to='https://github.com/webfryingpan/next-rpc'>
					<FontAwesomeIcon className='github-icon' icon={faGithub} />
				</Link>
			</div>
			{children}
		</header>
	)
}

export default Header
