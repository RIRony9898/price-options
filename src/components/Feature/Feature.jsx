import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from 'prop-types'

const Feature = ({feature}) => {
  return (
    <div className='flex items-center'>
        <FaCircleCheck className='mr-2' />
        <li>{feature}</li>
    </div>
  )
}

Feature.propTypes = {
  feature: PropTypes.string.isRequired
}

export default Feature