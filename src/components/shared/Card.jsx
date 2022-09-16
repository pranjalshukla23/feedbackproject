import PropTypes from 'prop-types';

function Card({children, reverse}){

  // return (
  //     <div className={`card ${reverse && 'reverse'}`}>
  //       {children}
  //     </div>
  // )

  return (
      <div className="card" style={{
        backgroundColor:reverse ? 'rgba(0,0,0,0.4)' : "#fff",
        color: reverse ? '#fff' : '#000'
      }}>
        {children}
      </div>
  )

}

//set default values for props
Card.defaultProps = {
  reverse: true
}

//set datatype for props
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card;
