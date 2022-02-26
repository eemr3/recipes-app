import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
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
