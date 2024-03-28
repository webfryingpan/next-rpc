import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import './css/header.css'

interface HeaderProps {
	controls?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ controls }) => {
	return (
		<header className='header'>
			<div style={{ display: 'flex', columnGap: '20px' }}>
				<Link href='/'>
					<h1 className='heading'>Discord RPC</h1>
				</Link>
				<Link href='https://github.com/webfryingpan/next-rpc' target='blank'>
					<FontAwesomeIcon icon={faGithub} className='github-icon' />
				</Link>
			</div>
			{controls}
		</header>
	)
}

export default Header
