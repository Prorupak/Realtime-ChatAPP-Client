import React from 'react'
import Logo from '../assets/line 1.svg'
import Logout from '../assets/Logout.svg'
import Home from '../assets/Home.svg'
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const Navbar = () => {
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }
    return (
        <>
        <div className="nav-main__Wrapper">
            <div className="nav-main__Container">
                <div className="nav-main__Logo">
                    <div className="Img-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="txt-logo">
                        <p className="nav-chatapp">ChatApp</p>
                    </div>
                    </div>
                    <div className="nav-icons">
                        <img src={Home} alt="Home" style={{cursor:'pointer'}} />
                        <img src={Logout} alt="logout" onClick={logout} style={{cursor:'pointer'}} />
                    </div>
                </div>
        </div>
        </>
    )
}

export default Navbar