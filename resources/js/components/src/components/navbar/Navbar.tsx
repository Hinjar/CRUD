import React from "react";
import {NavLink} from "react-router-dom";
import SelectAddDialog from "../dialogs/SelectAddDialog";

const Navbar: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Продукты</NavLink>
                    </li>
                    <li className="nav-item" onClick={handleClickOpen}>
                        <span className="nav-link link">Добавление</span>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" className="nav-link link">Поиск</NavLink>
                    </li>
                </ul>
            </div>
            <SelectAddDialog
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            />
        </nav>
    )
}

export default Navbar;
