import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestDetailDrink } from '../../services/api';
import CardDatailsAndInProgressDrinks
from '../../components/CardDatailsAndInProgressDrinks';

export default function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const getDrinkDetail = async () => {
      const data = await requestDetailDrink(id);
      setDrink(data);
    };
    getDrinkDetail();
  }, [id]);

  return (
    drink.length > 0 && <CardDatailsAndInProgressDrinks recipe={ drink[0] } inDetail />
  );
}
