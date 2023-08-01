import React, { useState } from 'react';

export default function ControlledCompOne() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`
      Name: ${personalInfo.name} - 
      Email: ${personalInfo.email} - 
      Message: ${personalInfo.message}
    `);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="Message">Message:</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={personalInfo.message}
          onChange={handleChange}
        ></textarea>

        <button>Submit</button>
      </form>
    </>
  );
}
