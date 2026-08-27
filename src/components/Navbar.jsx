
import './css/Navbar.css'
export function Navbar({title}){
    return(
        <nav className="navbar navbar-dark bg-dark text-white">
            <div className="container">
                <h1><a href="https://weastcoast.games/?ref=lapaninja">{title}</a></h1>
            <ul>
                <li>Shop</li>
                <li>About Us</li>
                <li>Stores</li>
            </ul>
            <ul>
                <li>ig</li>
                <li>cart</li>
            </ul>
            </div>
        </nav>
    );
}