import React, { useReducer } from 'react'
import { formReducer, initialState } from '../reducer/formReducer';

const Multiform = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <>
        <h2>Review section</h2>
        <h3>Name: {formData.name}</h3>
        <h3>Email: {formData.email}</h3>
        <h3>UserName: {formData.userName}</h3>
        <h3>Password: {formData.password}</h3>

        <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
      </>
    );
  }

  return (
    <>
      {step === 1 && (
        <div style={{ width: '30%', margin: 'auto', marginTop: '100px' }}>
          <h1>Step 1</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div style={{ width: '30%', margin: 'auto', marginTop: '100px' }}>
          <h1>Step 2</h1>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {step === 3 && (
        <>
          <h2>Confirm Details</h2>
          <h3>Name: {formData.name}</h3>
          <h3>Email: {formData.email}</h3>
          <h3>UserName: {formData.userName}</h3>
          <h3>Password: {formData.password}</h3>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>Submit</button>
        </>
      )}
    </>
  );
};

export default Multiform;
