import React from 'react'


const userStyle = {
    border: '1px black solid',
    margin: '0 auto',
    width: '50%'
}

export default function User(props){
    return(
        <div style={userStyle}>
            
            <img src={props.userImg} alt="user pic"/>
            <h1 style={userStyle}>Username: {props.username}</h1>
            <h1 style={userStyle}>{props.name}</h1>
            <h2 style={userStyle}>{props.profile}</h2>
            <h3 style={userStyle}>Number of followers: {props.followers}</h3>
            <h3 style={userStyle}>Following {props.following} people</h3>
            <h3 style={userStyle}>{props.bio}</h3>
            
            
        </div>
    )
}