import { useState} from 'react'
import axios from 'axios'

const LoginFrom = () => {
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

      
    }

    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Welcome To My Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='buton'>
                            <span>Start Chatting</span>
                        </button> 
                    </div>
                </form>
            </div>

        </div>
    )


}
