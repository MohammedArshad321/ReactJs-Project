import React from 'react'
export default function Infobox(props) {
  return (
    <div className="infobox">
    <div className="list">
        <div className="title"><span className={props.icon}></span>
           {props.title}
        </div>
        <div className="desc">
            {props.desc}
        </div>
    </div>
        
    </div>
  )
}
