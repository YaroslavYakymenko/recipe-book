import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipeRoutingModule} from './recipe-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ]
})
export class RecipeModule {
}
