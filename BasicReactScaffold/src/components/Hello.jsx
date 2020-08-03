import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "./style.scss"

export class Hello extends Component {
    render() {
        return (
            <div className="body">
                {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ?
                    <h1>Hi, this code is running in development mode</h1>
                    :
                    <h1>Hi, this code is running in production mode</h1>
                }
            </div>
        )
    }
}

export default Hello

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;