import React, { useState } from 'react';

export default function ControlledCompThree() {
  const [input, setInput] = useState('');
  const [error, setErrror] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);

    if (e.target.value.length < 5) {
      setErrror('Input must be at least 5 characters');
    } else {
      setErrror(null);
    }
  };

  const handleSubmit = () => {
    if (input.length >= 5) {
      alert(`
      Everything is ok. 
      Your input is as follows: ${input}`);
    } else {
      alert('Your input does not fulfill requirements.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Input">
          Input: <input type="text" value={input} onChange={handleInput} />
        </label>
        <button>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}
