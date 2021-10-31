import PropTypes from 'prop-types'
import Button from './Button'

// inline styling:
// <h1 style={{ color: 'red', backgroundColor: 'black' }}>Hello</h1>
// or
// <h1 style={headingStyle}>Hello</h1>

// destructure of the props object
const Header = ({title}) => {
    const onClickHandler = (e) => {
        console.log(e);
    };
// but onClick property value is to be passed to the Button component
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClickProperty={onClickHandler} color='green' text='Hello'/>
        </header>
    )
}
// set the default value of the props object property of this component
Header.defaultProps = {
    title: 'Task Tracker',
}
// check the value type and make the title property required (but the set up default value backs it up)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// object with css properties to be used for inline styles = CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
