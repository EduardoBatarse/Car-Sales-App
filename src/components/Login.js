import React, { useState } from 'react';
import './List.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPayment, setIsPayment] = useState(false);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      setIsPayment(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const newUser = { fullName, address, email, username, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setIsPayment(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPurchaseComplete(true);
  };

  if (isPurchaseComplete) {
    return (
      <div className="purchase-complete">
        <h2>Congratulations for your purchase!</h2>
        <p>It will get to you in 5-7 days.</p>
      </div>
    );
  }

  if (isPayment) {
    return (
      <div className="payment">
        <h2>Payment Method</h2>
        <form onSubmit={handlePayment}>
          <div>
            <label>Select Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          <button type="submit">Complete Purchase</button>
        </form>
      </div>
    );
  }

  return (
    <div className="login">
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <button onClick={() => setIsLogin(false)}>Create one</button></p>
        </div>
      ) : (
        <div>
          <h2>Create Account</h2>
          <form onSubmit={handleCreateAccount}>
            <div>
              <label>Full Name:</label>
              <input 
                type="text" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
              />
            </div>
            <div>
              <label>Address:</label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div>
              <label>Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit">Create Account</button>
          </form>
          <p>Already have an account? <button onClick={() => setIsLogin(true)}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default Login;
