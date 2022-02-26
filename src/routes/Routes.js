import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodsInProgress from '../pages/FoodsInProgress';
import DrinksInProgress from '../pages/DrinksInProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredinets from '../pages/ExploreDrinksIngredinets';
import ExploreFoodsNatinality from '../pages/ExploreFoodsNatinality';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import NotFound from '../pages/NotFound';
import DrinksDetails from '../pages/DrinkDetails';
import FoodsDetails from '../pages/FoodDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drink-details" component={ FoodsDetails } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/drink-details" component={ DrinksDetails } />
      <Route path="/foods-in-progress" component={ FoodsInProgress } />
      <Route path="/drinks-in-progress" component={ DrinksInProgress } />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore-foods" component={ ExploreFoods } />
      <Route path="/explore-foods-ingedients" component={ ExploreFoodsIngredients } />
      <Route path="/explore-drinks" component={ ExploreDrinks } />
      <Route path="/explore-drinks-ingredients" component={ ExploreDrinksIngredinets } />
      <Route path="/explore-foods-nationality" component={ ExploreFoodsNatinality } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
