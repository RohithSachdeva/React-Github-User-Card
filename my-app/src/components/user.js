import React from 'react'

export default function User(props){
    return(
        <div>
            
            <img src={props.userImg} alt="user pic"/>
            <h1>{props.username}</h1>
            <h1>{props.name}</h1>
            <h2>{props.profile}</h2>
            <h3>{props.followers}</h3>
            <h3>{props.following}</h3>
            <h3>{props.bio}</h3>
            
            
        </div>
    )
}