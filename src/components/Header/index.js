import {Link} from 'react-router-dom'
import './index.css'

const Header=()=>(
    <nav className="nav-container">
        <h1 className="nav-head">Dev Blog</h1>
        <ul className="nav-menu">
            <Link to="/" className="nav-item">
            <li>Home</li>
            </Link >
            <Link to="/about" className="nav-item">
            <li>About</li>
            </Link>
            <Link to="/contact" className="nav-item">
            <li>Contact</li>
            </Link>        
            </ul>
    </nav>

)

export default Header