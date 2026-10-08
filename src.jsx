import { useState } from "react";
import "./App.css";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    // Check phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    // Registration successful
    setIsRegistered(true);
  };

  const handleRegisterAgain = () => {
    setIsRegistered(false);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
    });
  };

  // Registration success page
  if (isRegistered) {
    return (
      <div className="page">
        <div className="success-box">

          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Your registration has been completed successfully.
          </p>

          <p>
            Welcome, <strong>{formData.name}</strong>!
          </p>

          <button onClick={handleRegisterAgain}>
            Register Again
          </button>

        </div>
      </div>
    );
  }

  // Registration form
  return (
    <div className="page">

      <div className="form-box">

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">

            <label>Gender</label>

            <div className="gender-options">

              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                Male
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>

            </div>

          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default App;