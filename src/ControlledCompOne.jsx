import React, { useState } from 'react';

export default function ControlledCompOne() {
  const [firstName, setFirstName] = useState('');

  function handleInput(e) {
    setFirstName(e.target.value);
  }

  const [gender, setGender] = useState('');

  function handleGender(e) {
    setGender(e.target.value);
  }

  const [license, setLicense] = useState(false);

  function handleLicense(e) {
    setLicense(e.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="FirstName">
          First Name
          <br />
          <input type="text" value={firstName} onChange={handleInput} />
        </label>
        <br />
        <label htmlFor="Gender">
          Gender
          <br />
          <select name="gender" value={gender} onChange={handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label htmlFor="license">
          <input type="checkbox" value={license} onChange={handleLicense} />
          Do you have driving licence?
        </label>
      </form>

      <h4>Profile Informations:</h4>

      <p>
        Name: {firstName}
        <br /> Gender: {gender}
        <br />
        {license ? <>License has been selected.</> : <></>}
      </p>
    </>
  );
}
