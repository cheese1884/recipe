import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'tasty Schnitzel - just awesome',
    'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
    [new Ingredient('Meat', 1),
     new Ingredient('French Fries', 20)
     ]),

    new Recipe('Burger', 'Nice Burger',
    'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
    [new Ingredient('Buns', 2),
    new Ingredient('Meat', 1)
    ]),
];

  getRecipes() {
    return this.recipes.slice();
  }

}
