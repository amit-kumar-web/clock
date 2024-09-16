import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const data = [
        {
            label: 'Home',
            to: '/home'
        },
        {
            label: 'About Me',
            to: '/about'
        },
        {
            label: 'Skills',
            to: '/skills'
        },
        // {
        //     label: 'Resume',
        //     to: '/resume'
        // },
        {
            label: 'Project',
            to: '/project'
    
        },
        {
            label: 'contact_us',
            to: '/contact'
        }
    ]

    const [toggleIcon, setToggleicon] = useState(false);

    const handleToggleIcon = () => {
        setToggleicon(!toggleIcon);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link onTouchEnd={'/'} className="navbar__container__logo">
                        {/* <Farecat size={30} /> */}
                    </Link>
                </div>
                <ul className="navbar__container__menu">
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>

                            </li>
                        ))
                    }
                    <div className="nav-icon" onClick={handleToggleIcon}>

                        {/* {toggleIcon ? <Hix size={30} /> : <FaBars size={30} />
                        } */}
                    </div>


                </ul>
            </nav>

        </div>

    )
}

export default Navbar
