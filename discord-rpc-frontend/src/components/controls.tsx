import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@styles/components/controls.css'

const Controls: React.FC = () => {
	return (
		<div className='controls'>
			<FontAwesomeIcon className='control' icon={faPlay} />
			<FontAwesomeIcon className='control' icon={faStop} />
		</div>
	)
}

export default Controls
