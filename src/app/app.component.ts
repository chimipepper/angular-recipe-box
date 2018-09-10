import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeList: any;
  constructor(private recipe: RecipeService) {
    this.recipeList = recipe.getRecipes();
  }
  addRecipe(formInput){
    console.log(formInput);
    this.recipe.addRecipes(formInput).subscribe(data => {
      console.log(data);
    }
    )
  }
}
