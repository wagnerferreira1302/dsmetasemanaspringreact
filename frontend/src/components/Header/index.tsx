import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-log-container">
                <img src={logo} alt="DsMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="http://www.instagram.com/devsuperior.ig" >@devsuperior.ig</a>
                </p>
            </div>
        </header >
    )
}

export default Header