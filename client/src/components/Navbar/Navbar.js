import '../../styles/Navbar.css';
import NavbarAccountActions from './NavbarAccountActions';

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='title'>
        <span>Odinshop</span>
      </div>
      <div className='options'>
        <NavbarAccountActions />
      </div>
    </div>
  );
}

export default Navbar;