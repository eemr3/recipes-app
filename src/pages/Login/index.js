import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import CoverScreenLogin from '../../images/CoverScreenLogin.svg';
import Button from './components/Button';
import Input from './components/Input';
import Content from './components/Content';

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const passwordLength = 6;
    /* Regex de validação de e-mail retirado do
      https://qastack.com.br/programming/46155/how-to-validate-an-email-address-in-javascript
      Autor: — C. Lee
    */
    const validateEmail = /\S+@\S+\.\S+/;
    return validateEmail.test(email) && password.length > passwordLength;
  };

  const handleClickLogin = (event) => {
    event.preventDefault();
    setMealsTokenInStorage(1);
    setCocktailsTokenInStorage(1);
    setEmailInStorage(email);
  };

  return (

    <div className="lg:flex">
      <Content>
        <Input
          setEmail={ setEmail }
          setPassword={ setPassword }
          email={ email }
          password={ password }
        />
        <Button
          handleClickLogin={ handleClickLogin }
          validateForm={ validateForm }
        />
      </Content>
      <div
        className="hidden lg:flex items-center justify-center bg-red-100
    flex-1 h-screen"
      >
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img src={ CoverScreenLogin } alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
