import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Name of the recipe',
      'Dummy description',
      'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
      [
        new Ingredient('Apple', 1),
        new Ingredient('Onion', 0.5)
      ]),
    new Recipe('Dummy recipe',
      'Very good one',
      'https://goo.gl/KJYifK',
      [
        new Ingredient('Apple', 12),
        new Ingredient('Onion', 5),
        new Ingredient('Banana', 45)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
