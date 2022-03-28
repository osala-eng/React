import PropTypes from 'prop-types'
import Button from "./Button"
const Header = ({title, onNew}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color="green" text="New" onclick={onNew}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager'
}
Header.propTypes ={
    title: PropTypes.string,
}
export default Header