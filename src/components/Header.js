import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </header>
  )
}

// Variable default
Header.defaultProps = {
    title: 'Default Title test',
}

// Variable datatype validation
Header.prototype = {
    title : PropTypes.string.isRequired
}

// Using CSS in JS
// <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     color : 'red',
//     backgroundColor : 'black',
// }


export default Header