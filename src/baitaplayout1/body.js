import React from "react";
import Baner from "./baner";
import Item from "./item";


export default class Body extends React.Component {
    render() {
        return (
            <div className="container my-3">
                <Baner />
                <Item />
            </div>
        )
    }
}