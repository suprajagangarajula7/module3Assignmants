import React from 'react'

function MessageCard(props) {
  return (
    <div className="MessageCard">
        <h3>Title:{props.title}</h3>
        <p>Message:{props.message}</p>
    </div>
  )
}

export default MessageCard