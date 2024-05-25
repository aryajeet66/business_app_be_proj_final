// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = email ? "" : "Email is required";
    if (email) {
      tempErrors.email = /\S+@\S+\.\S+/.test(email) ? "" : "Email is not valid";
    }
    tempErrors.password = password ? "" : "Password is required";
    if (password) {
      tempErrors.password = password.length >= 6 ? "" : "Password must be at least 6 characters long";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

//['Cantonese', 'Afghan', 'Ice Cream', 'Italian', 'Continental', 'British', 'Mughlai', 'Grill', 'Burmese', 'Korean', 'Healthy Food', 'Tibetan', 'Bakery', 'French', 'Vietnamese', 'South Indian', 'Wraps', 'Burger', 'Desserts', 'South American', 'Biryani', 'Hyderabadi', 'Seafood', 'North Eastern', 'European', 'Mongolian', 'Filipino', 'Tex-Mex', 'Lebanese', 'Cafe Food', 'Juices', 'Tea', 'Momos', 'Assamese', 'Spanish', 'Gujarati', 'Falafel', 'Bohri', 'Mediterranean', 'Indian', 'Steak', 'Japanese', 'Mexican', 'Parsi', 'Charcoal Chicken', 'Maharashtrian', 'Bengali', 'Bihari', 'Portuguese', 'Frozen Yogurt', 'Mangalorean', 'Pizza', 'Kashmiri', 'American', 'Mithai', 'Awadhi', 'Lucknowi', 'Asian', 'Deli', 'Street Food', 'Chinese', 'Turkish', 'BBQ', 'Indonesian', 'Beverages', 'Coffee', 'Cafe', 'Roast Chicken', 'Salad', 'Rajasthani', 'Sindhi', 'Konkan', 'Singaporean', 'Kerala', 'Modern Indian', 'Arabian', 'Andhra', 'Malwani', 'Thai', 'Sushi', 'Finger Food', 'Malaysian', 'Chettinad', 'Rolls', 'Paan', 'Greek', 'Iranian', 'Goan', 'Middle Eastern', 'North Indian', 'Sandwich', 'Kebab', 'Oriya', 'German', 'Bubble Tea', 'Bar Food', 'Brazilian', 'Nepalese', 'Fast Food']
/*[ 'Pune',
'FC Road',
'Shivaji Nagar',
'Baner',
'Koregaon Park',
'Viman Nagar',
'Senapati Bapat Road',
'Kalyani Nagar',
'Kothrud',
'Pimple Saudagar',
'Dhankawadi',
'Aundh',
'Hinjawadi',
'Pimpri',
'Katraj',
'Mundhwa',
'Sinhgad Road',
'Magarpatta',
'Wakad',
'Wagholi',
'Kharadi',
'Bibvewadi',
'Kondhwa',
'Nigdi',
'Ravet',
'Erandwane',
'Sadashiv Peth',
'Chinchwad',
'Wadgaon Sheri',
'Narhe',
'Camp Area',
'Wanowrie',
'Karve Nagar',
'NIBM Road',
'Hadapsar',
'Pimple Nilakh',
'Bavdhan',
'Pashan',
'Yerawada',
'Pimple Gurav',
'Balewadi',
'Salunkhe Vihar Road',
'Warje',
'Bhosari',
'Chandan Nagar',
'Lohegaon',
'Pune-Solapur Road',
'Dhanori',
'Vishrantwadi',
'Akurdi' ] */


