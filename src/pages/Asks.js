import axios from 'axios'
import { useState } from 'react'

export default function Asks() {
    const [name, setName] = useState();
    const [msg, setMsg] = useState("");
    const [sent, setSet] = useState("");
    const api_link = `https://api.telegram.org/bot7909946879:AAH5UPxYMP-nfLUonJDYV9YjOd6bB21PqV4/sendMessage?chat_id=6323109759&text=a message from the website: name: ${name}, and msg: ${msg}`

    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f9f9f9',
            padding: '20px',
          }}
        >
          <form
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '500px',
              width: '100%',
            }}

            onSubmit={(e) => {
                e.preventDefault();

                axios.get(api_link)
                setSet("لقد تم ارسال رسالتك، شكرا لك!")
            }}
          >
            <h3
              style={{
                textAlign: 'center',
                color: '#333',
                marginBottom: '20px',
              }}
            >
              {sent}
            </h3>
            <hr
              style={{
                border: 'none',
                borderBottom: '1px solid #ddd',
                marginBottom: '20px',
              }}
            />
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#555',
              }}
            >
              اسمك
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '20px',
                fontSize: '14px',
              }}
            />
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#555',
              }}
            >
              إذا كان لديك نوع من الدورات التي تريدها، فلا تتردد في طلبها، أو إذا كنت تريد كتابًا أو رواية، فاكتب اسمها
              أيضًا وسأحصل عليها مع جميع أجزائها، كن سعيدًا!
            </label>
            <textarea
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minHeight: '100px',
                marginBottom: '20px',
                fontSize: '14px',
              }}
            />
            <button
              type="submit"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              Send
            </button>
          </form>
        </div>
      );
      
}