import React from 'react';
import PropTypes from 'prop-types';

function Input({ setEmail, setPassword, email, password }) {
  return (
    <>
      <div>
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          Email Address
        </div>
        <input
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
          className="w-full text-lg py-2 border-b border-gray-300
                        focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="mike@gmail.com"
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div
            className="text-sm font-bold text-gray-700
                            tracking-wide"
          >
            Password
          </div>
        </div>
        <input
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
          className="w-full text-lg py-2 border-b border-gray-300
                        focus:outline-none focus:border-indigo-500"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </>
  );
}

Input.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};
export default Input;
