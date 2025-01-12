import './cc.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function Comment(props) {
    const [comment, setComment] = useState("");
    const [msg, setMsg] = useState("أضف تعليقًا. وكن لطيفًا");
    const [comments, setComments] = useState([]);
    const [charCountMsg, setCharCountMsg] = useState(""); // Message for character limit
    const comment_api_url = process.env.REACT_APP_API_URL || "https://shaheen101sec.pythonanywhere.com/api/comment/add";
    const get_comments_api = `${process.env.REACT_APP_API_URL || "https://shaheen101sec.pythonanywhere.com/api"}/comments/${props.cat}`;
    
    const token = Cookies.get('user-cookies');
    let username = "";

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            username = decodedToken.username; // Assuming 'username' is part of the token
        } catch (error) {
            console.error("Error decoding JWT:", error);
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(get_comments_api);
            setComments(response.data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const handleCommentChange = (event) => {
        const newComment = event.target.value;

        if (newComment.length > 100) {
            setCharCountMsg("التعليق لا يمكن أن يتجاوز 100 حرف.");
        } else {
            setCharCountMsg("");
        }

        setComment(newComment.slice(0, 100)); // Truncate if user exceeds limit
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (comment.trim() === "") {
            setMsg("الرجاء كتابة تعليق");
            return;
        }

        const comment_data = {
            cat: props.cat,
            username: username,
            comment: comment
        };

        try {
            await axios.post(comment_api_url, comment_data);
            setMsg("تم التعليق بنجاح!");
            setComment(""); 
            fetchComments();
        } catch (error) {
            setMsg("لا يمكن أن يحتوي التعليق على هذه الأحرف: !@#$%^&</*()|{}?>");
            console.error(error);
        }

        setTimeout(() => {
            setMsg("أضف تعليقًا. وكن لطيفًا");
        }, 5000);
    };

    return (
        <div className="comment-container">
            <section className="comment-section">
                <form className="comment-form" onSubmit={handleSubmit}>
                    <h3 className="form-message">{msg}</h3>
                    <input
                        className="comment-input"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="اكتب تعليقك (100 حرف كحد أقصى)"
                    />
                    {charCountMsg && <p className="char-limit-msg">{charCountMsg}</p>}
                    <button className="comment-button" type="submit">إضافة تعليق</button>
                </form>
                
                <h3 className="comments-heading">التعليقات لفئة: {props.cat}</h3>
                <ul className="comments-list">
                    {comments.slice().reverse().map((commentItem, index) => (
                        <li className="comment-item" key={index}>
                            <strong className="comment-username">{commentItem.username}:</strong> {commentItem.comment}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
