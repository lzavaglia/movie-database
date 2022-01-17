import React, { useState } from "react";
import Nav from "./Nav";

const Hamburger = () => {
    const[open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <div className="btn">
                    <div className="btn_burger"></div>
            </div>
            <Nav open={open}/>
        </React.Fragment>
    )
};

export default Hamburger;