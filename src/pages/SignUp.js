import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    
    useEffect(() => {
        
        const userToken = document.cookie.split('; ').find(row => row.startsWith('user-cookies='));
        if (userToken) {
            navigate('/');
        }
    }, [navigate]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const signup_api_url = "https://shaheen101sec.pythonanywhere.com/api/signup";

    return (
        <div>

              <center><h3 dangerouslySetInnerHTML={{ __html: msg }} /></center>
            
            <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                <div 
                    className="card shaheen-card" 
                    style={{ width: '20rem', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                >
                    <h3>سجل الآن!</h3>
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        const signup_data = {
                            "username": username,
                            "password": password
                        };

                        axios.post(signup_api_url, signup_data)
                            .then((response) => { 
                                setMsg(response.data.msg);
                            })
                            .catch((err) => setMsg("يجب عليك ملء جميع الحقول"));
                    }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="username">اسم المستخدم:</label>
                            <input 
                                id="username"
                                type="text" 
                                value={username} 
                                onChange={(event) => setUsername(event.target.value)} 
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password">كلمة المرور:</label>
                            <input 
                                id="password"
                                type="password" 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)} 
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <button 
                            type="submit" 
                            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            سجل
                        </button>
                        
                        <p style={{textAlign: "center"}}>لديك حساب بالفعل؟ <a href='login'>انقر هنا لتسجيل الدخول</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
