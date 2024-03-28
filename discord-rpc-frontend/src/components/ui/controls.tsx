import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/controls.css'

const Controls: React.FC = () => {
	return (
		<div className='controls'>
			<FontAwesomeIcon icon={faPlay} className='control' />
			<FontAwesomeIcon icon={faStop} className='control' />
		</div>
	)
}

export default Controls
