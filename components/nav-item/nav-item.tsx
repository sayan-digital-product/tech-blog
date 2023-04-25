

import {
	Navbar,
	NavItem,
	NavLink,
	Nav
} from "reactstrap";

import  { navbarList } from "@santech/core/config/app.config";
import { NavbarModel } from "@santech/core/models/navbar.model";
import style from './nav.module.css';
import Button from "@mui/material/Button";

export default function ApplicationNavbar() {
    return(
        <>
            <header className="">
                <Navbar
                 sxpand="lg"
                 id="navbar"
                 position={"sticky"}
                >
                    <Nav className={`grid grid-cols-4 gap-4 p-4 align-items-lg-center ml-lg-auto ${style.navbarContainer}`}
					    navbar
                    >
                        {navbarList?.map((item: NavbarModel, index: number) => {
                            return (<NavItem key={index}>
                                <NavLink 
                                    rel="noopener"
                                    aria-label={item.name}
                                    className="nav-link-icon"
                                    href={item.url ? item.url : '#'}
                                >
                                    <Button variant="text" color="primary" className={style.secondaryText}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                            </NavItem>)
                        })

                        }
                    </Nav>
                </Navbar>
            </header>
        </>
    )
}