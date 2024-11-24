import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Redirect, Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./AccountCreationPage.css";

const AccountCreationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleCreateAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Perform other actions if needed
        setRedirectToHome(true);
      })
      .catch((error) => {
        // Handle authentication error
        console.error('Error creating user: ', error);
      });
  };

  if (redirectToHome) {
    return <Redirect to="/" />;
  }

  return (
    <div className='login'>
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
          alt="Logo"
        />
      </Link>
      <div className='all-field' >
      <h2 className='h2' >Create Your Account</h2>
      <input 
        type="text"
        placeholder="Name"
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="email"
        placeholder="Email"
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="text"
        placeholder="Address"
        value={address} 
        onChange={e => setAddress(e.target.value)} 
      />
      <input 
        type="text"
        placeholder="Phone Number"
        value={phoneNumber} 
        onChange={e => setPhoneNumber(e.target.value)} 
      />
      <input
        type="password" 
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
    </div>
  );
};

export default AccountCreationPage;

