import ComoQuieresHoyTuPedido from "./ComoQuieresHoyTuPedido"
import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="container-fluid headerBackground p-5">
            <div className="row">
                <div className="col">
                    <Logo />
                    <NavBar />
                    <ComoQuieresHoyTuPedido />
                </div>
            </div>
        </div>
    )
}

export default Header