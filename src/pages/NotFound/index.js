import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="bg-gray-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-orange-500">404</h1>
            <h1 className="text-6xl font-medium py-8">
              oops! Pagina não encontrada
            </h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              Ops! A página que você está procurando não existe.
              Ele pode ter sido movido ou excluído.
            </p>
            <button
              type="button"
              onClick={ () => history.push('/') }
              className="bg-orange-500
              hover:br-orange-700
              text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              Voltar a Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
