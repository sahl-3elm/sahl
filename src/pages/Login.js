import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [jwt, setJwt] = useState("");
    const signup_api_url = "https://shaheen101sec.pythonanywhere.com/api/login";
    const navigate = useNavigate();

    useEffect(() => {
        
        const userToken = document.cookie.split('; ').find(row => row.startsWith('user-cookies='));
        if (userToken) {
            navigate('/');
        }
    }, [navigate]);

    const signupHandler = (event) => {
        event.preventDefault();
        const signup_data = {
            "username": username,
            "password": password
        };

        axios.post(signup_api_url, signup_data)
            .then((response) => { 
                setMsg(response.data.msg);
                if (response.data.msg && response.data.msg.includes("username and password are correct")) {
                    const token = response.data.token; 
                    setJwt(token); 
                    document.cookie = `user-cookies=${token}; path=/`;
                    navigate('/'); 
                }
            })
            .catch((err) => {
                console.log(err);
                setMsg("حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا.");
            });
    };

    return (
        <div>
            <h3 dangerouslySetInnerHTML={{ __html: msg }} />
            <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                <div 
                    className="card shaheen-card" 
                    style={{ width: '20rem', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                >
                    <h3>تسجيل الدخول</h3>
                    <form onSubmit={signupHandler}>
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
                            الدخول
                        </button>
                        <br />
                        <p style={{textAlign: "center"}}>ليس لديك حساب ؟<a href='/signup'>انقر هنا للتسجيل</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

