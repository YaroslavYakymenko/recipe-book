import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Name of the recipe', 'Dummy description', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'),
    new Recipe('Dummy recipe', 'Very good one', 'https://goo.gl/KJYifK')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe);
  }
}
