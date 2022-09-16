import {isDisabled} from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types';


function Button({children,version,type,isDisabled}){

  return (
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
      </button>
  )
}

//define default values for props
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}

//define data types for props
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button
