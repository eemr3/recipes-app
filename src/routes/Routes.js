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
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import RecipesProvider from '../context/RecipesProvider';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <RecipesProvider>
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
      </RecipesProvider>

      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore-foods" component={ ExploreFoods } />
      <Route
        exact
        path="/explore-foods-ingedients"
        component={ ExploreFoodsIngredients }
      />
      <Route exact path="/explore-drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore-drinks-ingredients"
        component={ ExploreDrinksIngredinets }
      />
      <Route
        exact
        path="/explore-foods-nationality"
        component={ ExploreFoodsNatinality }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
