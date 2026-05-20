import { useState } from 'react';

function ContactForms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');
    // function handleAdd() {
    //     if (input.trim() === '') return;
    //     setTodos([...todos, input]);
    //     setInput('');
    // }

    function handleSubmit() {
        if(name.trim() === '' || email.trim() === '' || message.trim() === '') 
            setFeedback("Completeaza toate campurile!");
        else 
            setFeedback("Multumim, " + name + " Mesajul " + message + " A fost primit!");
    }

    return (
        <div>
            <h3>Contact Form</h3>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nume..."
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
            />
            <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesaj..."
            />
            <button onClick={handleSubmit}>Submit</button>
            <h4>{feedback}</h4>
        </div>
    );
}

export default ContactForms;