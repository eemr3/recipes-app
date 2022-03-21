import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile() {
  const [user, setUser] = useState('');
  const history = useHistory();
  useEffect(() => {
    const email = localStorage.getItem('email') || '';
    setUser(email);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="Profile" />
      <h2 className="text-center text-xl my-10 text-gray-700">
        Usuário ativo:
        {' '}
        <span className="text-orange-500">{user}</span>
      </h2>
      <div className="flex flex-col justify-center items-center">
        <button
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-52 m-1"
        >
          Recietas favoritas

        </button>
        <button
          type="button"
          onClick={ () => history.push('/done-recipes') }
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-52 m-1"
        >
          Recitas feitas

        </button>
        <button
          type="button"
          onClick={ handleLogout }
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-52 m-1"
        >
          Sair

        </button>
      </div>
      <Footer />
    </div>
  );
}
