import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestDetailDrink } from '../../services/api';
import CardDatailsAndInProgressDrinks
from '../../components/CardDatailsAndInProgressDrinks';
import RecipesProvider from '../../context/RecipesProvider';

function DrinksInProgress() {
  const { id } = useParams();
  const [inProgressData, setInProgressData] = useState([]);

  useEffect(() => {
    const getDetailDrink = async () => {
      const response = await requestDetailDrink(id);
      setInProgressData(response);
    };
    getDetailDrink();
  }, [id]);

  return (
    inProgressData.length > 0 && (
      <RecipesProvider>
        <CardDatailsAndInProgressDrinks
          recipe={ inProgressData[0] }
          inProgress
        />
      </RecipesProvider>
    )
  );
}

export default DrinksInProgress;
