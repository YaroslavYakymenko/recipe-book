import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Name of the recipe', 'Dummy description', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'),
    new Recipe('Dummy recipe', 'Very good one', 'https://goo.gl/KJYifK')
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
