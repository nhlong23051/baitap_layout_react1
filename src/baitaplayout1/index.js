import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default class BaiTapLayOut1 extends React.Component {
    render() {
        return (
            <>
                <div className="container">

                    <Header />

                    <Body />

                </div>
                    <Footer />
            </>
        )
    }
}