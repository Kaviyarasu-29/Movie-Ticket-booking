import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const hdlg = () => {
        if (!username || !password) {
            setErrorMessage('Username and password are required.');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }
        onLogin();
    };
    return (
        <div className='Container-main lng-main'>
            <div className='Cntner'>
                <h2 className='lng'>Login</h2>
                <div className='lb'>
                    <label>Username:</label>
                    <input type="text" placeholder='Enter a name' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='lb'>
                    <label>Password:</label>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <button className='btn-lng' onClick={hdlg}>Login</button>
            </div>
        </div>
    );
};
export default Login;
