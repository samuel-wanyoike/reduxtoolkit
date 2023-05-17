import { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';

// useDispatch is used to modify state
//useState is used to select a state

export const Login = () => {

    const [newUsername, setNewUsername] = useState('');

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
    
    return (
        <div>
            <h1>This is the login page</h1>
            {username}
            <input type='text' onChange={(event) => {
                setNewUsername(event.target.value)
            }}/>
            <button onClick={() => dispatch(login({username : newUsername}))}>Submit Login</button>
            <button>Log Out</button>
        </div>
    )
}