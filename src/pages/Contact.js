import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function Contact() {
    const [name,setName]=useState('')
    const [email, setEmail]=useState('')
    const [message,setMassage]=useState('')
   const  onNameChange=(e)=> {
        setName(e.target.value)
    }
    const onEmailChange=(event)=> {
        setEmail(event.target.value)
    }
    const onMessageChange=(event)=> {
        setMassage(event.target.value)
    }

  return (
    <div>
        <form id="contact-form"  method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={onNameChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={message} onChange={onMessageChange} />
            </div>
            <Link to="/" type="submit" className="btn btn-primary">Submit</Link>
        </form>
    </div>
  )
}
