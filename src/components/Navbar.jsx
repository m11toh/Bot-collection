import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar sticky-top bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/">Bot</Link>
            <Link to="/">Home</Link>
            <Link to="/Mybots">Yourbot</Link>
            </div>
        </nav>
    )

}

export default Navbar