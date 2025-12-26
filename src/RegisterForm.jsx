import React, { useState } from 'react';

const genderList = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" }
];

const hobbyList = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" }
];

const roleList = [
  { label: "General staff", value: "General staff" },
  { label: "Developer", value: "Developer" },
  { label: "System Analyst", value: "System Analyst" }
];

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
  const [hobbies, setHobbies] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to toggle views

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Switch to display mode
  };

  return (
    <div style={{ padding: '20px' }}>
      {!submitted ? (
        /* --- FORM VIEW --- */
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input name="username" placeholder="Username" required onChange={handleChange} />
            <input name="firstname" placeholder="Firstname" required onChange={handleChange} />
            <input name="lastname" placeholder="Lastname" required onChange={handleChange} />

            <p>Gender:</p>
            {genderList.map(g => (
              <label key={g.value}>
                <input type="radio" name="gender" value={g.value} onChange={handleChange} /> {g.label}
              </label>
            ))}

            <p>Hobbies:</p>
            {hobbyList.map(h => (
              <label key={h.value}>
                <input type="checkbox" value={h.value} onChange={onHobbiesToggle} /> {h.label}
              </label>
            ))}

            <p>Apply Role:</p>
            <select name="role" onChange={handleChange}>
              {roleList.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>

            <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
          </div>
        </form>
      ) : (
        /* --- SUBMISSION VIEW --- */
        <div>
          <h2>Submission Received</h2>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Name:</strong> {formData.firstname} {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>
          
          <button onClick={() => setSubmitted(false)}>Back to Form</button>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;