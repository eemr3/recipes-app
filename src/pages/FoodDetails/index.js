import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestDetailFood } from '../../services/api';
import CardDatailsAndInProgressFoods
from '../../components/CardDatailsAndInProgressFoods';

export default function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getFoodDetail = async () => {
      const data = await requestDetailFood(id);
      setFood(data);
    };
    getFoodDetail();
  }, [id]);

  return (
    food.length > 0 && <CardDatailsAndInProgressFoods recipe={ food[0] } inDetail />
  );
}
