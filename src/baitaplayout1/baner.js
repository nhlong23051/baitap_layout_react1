import React from "react";

export default class Baner extends React.Component {
    render() {
        return (
            <div className="text-center py-5" style={{ background: 'grey' }}>
                <h1>A Warm Welcome!</h1>
                <p style={{fontSize:'21px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus illo iste placeat ipsa voluptatem exercitationem recusandae. Itaque aspernatur magni eaque.
                </p>
                <button className="btn btn-info">Call to action!</button>
            </div>
        )
    }
}