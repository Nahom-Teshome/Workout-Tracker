import {NavLink, Outlet} from 'react-router-dom'

export default function NavBar(){

    return(
        <header >
            <div className="container">
            <NavLink className="navbar" to="/">
                <h1>WorkOut Buddy</h1>
            </NavLink>
            <div className="outlet">
                <Outlet/>
            </div>
            </div>
        </header>
    )
}