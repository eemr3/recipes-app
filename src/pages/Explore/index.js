import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />
      <div
        className="flex flex-col
        items-center justify-center mt-5 container max-w-4xl mx-auto"
      >
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-3/4 m-1"
          onClick={ () => history.push('/explore/foods') }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-3/4 m-1"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
