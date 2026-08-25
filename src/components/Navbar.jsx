import { DiceIcon } from "./DiceIcon";
export function Navbar({title}){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid"/>
                <a className="text-white" href="https://weastcoast.games/?ref=lapaninja">Weast Coast</a>
                <a className="navbar-brand d-flex align-items-left gap-2" href="#"><DiceIcon size={30}></DiceIcon></a>
            <h1>{title}</h1>
            <ul>
                <li>Shop</li>
                <li>About Us</li>
                <li>Stores</li>
            </ul>
        </nav>
    );
}