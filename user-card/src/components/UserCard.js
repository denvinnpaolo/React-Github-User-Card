import React from "react";

export default function UserCard(props){
    console.log(props)
    return(
        <div className="user">
            <h1>{props.user.name}</h1>
        </div>
    )
}