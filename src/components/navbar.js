import React from 'react';
import { RiHomeLine, RiMoreLine, RiSearchLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export default class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="row border-bottom">
                    <div className="col-md-1 border-right text-center">
                        <div className="p-3">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiHomeLine />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex h-100">
                            <IconContext.Provider value={{ className: "h-100 text-muted" }}>
                                <RiSearchLine />
                            </IconContext.Provider>
                            <input type="text" className="border-0 form-control h-100 nav-search-box" placeholder="search for any thing..." />
                        </div>
                    </div>
                    <div className="col-md-1 border-left text-center">
                        <div className="p-3">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiMoreLine />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}