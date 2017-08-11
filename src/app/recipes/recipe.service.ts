import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Name of the recipe',
      'Dummy description',
      'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
      [
        new Ingredient('Apple', 5),
        new Ingredient('Onion', 2)
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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
