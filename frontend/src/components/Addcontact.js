import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addcontact() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const handleAddContact = async (e) => {
        e.preventDefault();
        const userData = {
          name: name,
          mobile: mobile,
          email: email,
        };
    
        try {
          const response = await fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            // Registration was successful
            alert('User registered successfully.');
            navigate('/');
            // You can perform other actions like redirecting to a login page.
          } else {
            // Registration failed, handle the error
            const data = await response.json();
            alert('Registration failed:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div style={{ display:"flex",height:"100vh", justifyContent:"center"}}>
    <div className="p-4 shadow-md rounded-lg" style={{width:"100%", marginTop: 50 ,height:350, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',}}>
      <h2 className="text-xl font-bold mb-4" style={{ fontSize: 30}}><center>Add Contact</center></h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
           
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full border p-2 rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
           
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2  rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           
        />
      </div>
      
      <center><button
        onClick={handleAddContact}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Contact
      </button></center>
      </div>
    </div>
  )
}