import React from 'react';
import './component_css/LeftNav.css';
export default function LeftNav() {
    return(
        <div className="leftNav">
                <div className="leftNavContentItem">
                    <h1>Filter</h1>
                </div>
                <div className="leftNavContentItem">
                    <h1>Questionare</h1>
                </div>
                <div className="leftNavContentItem">
                    <h1>Chat bot</h1>
                </div>
                <div className="leftNavContentItem">
                    <h1>Live assistance</h1>
                </div>
        </div>
    )   

}