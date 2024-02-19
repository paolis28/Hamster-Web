import '../styles/Navbar.css'
import locoHamster from '../assets/img/hamster-webTitulo.png'

export const Navbar = ()=>{
    return(
        <header className='header'>
            <nav>
                <div className='containerLogo'>
                    <img src={locoHamster}/>
                </div>
                <label>Ingresar</label>
            </nav>
        </header>
    );
}