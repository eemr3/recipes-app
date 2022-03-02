import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDatailsAndInProgressFoods
from '../../components/CardDatailsAndInProgressFoods';
import RecipesProvider from '../../context/RecipesProvider';
import { requestDetailFood } from '../../services/api';

function FoodsInProgress() {
  const { id } = useParams();
  const [inProgressData, setInProgressData] = useState([]);

  useEffect(() => {
    const getDetailFood = async () => {
      const response = await requestDetailFood(id);
      setInProgressData(response);
    };
    getDetailFood();
  }, [id]);

  return (
    inProgressData.length > 0 && (
      <RecipesProvider>
        <CardDatailsAndInProgressFoods
          recipe={ inProgressData[0] }
          inProgress
        />
      </RecipesProvider>
    )
  );
}

export default FoodsInProgress;
