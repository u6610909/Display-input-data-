import React, { useState } from 'react';

// Required: Use arrays for choices
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Specific function provided in your instructions
  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registration Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="firstname" placeholder="Firstname" onChange={handleChange} />
        <input name="lastname" placeholder="Lastname" onChange={handleChange} />

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
      </div>

      <hr />
      <h3>Values Preview:</h3>
      <p>Username: {formData.username}</p>
      <p>Firstname: {formData.firstname}</p>
      <p>Lastname: {formData.lastname}</p>
      <p>Gender: {formData.gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {formData.role}</p>
    </div>
  );
}

export default RegisterForm;