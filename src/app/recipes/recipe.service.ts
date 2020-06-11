import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    // private recipes: Recipe[] = [
    //     {
    //         name: 'Balsamic Chicken',
    //         description: 'Nothing is better than Balsamic Vinegar!',
    //         imagePath: 'https://hips.hearstapps.com/hmg-prod/images/gallery-1507307080-delish-balsamic-chicken-1-copy-1521239592.png',
    //         ingredients: [
    //             {
    //                 name: 'Balsamic Vinegar',
    //                 amount: 1
    //             },
    //             {
    //                 name: 'Chicken',
    //                 amount: 4
    //             }
    //         ]
    //     },
    //     new Recipe(
    //         'Tasty Chicken and Linguini', 
    //         'A flavorful dish for an italian dinner', 
    //         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    //          [
    //              new Ingredient('Noodles', 3),
    //              new Ingredient('Chicken', 1)
    //          ]),
    //     new Recipe(
    //         'Creamy Steak', 
    //         'Mouth watering steak ready to eat', 
    //         'https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg',
    //         [
    //             new Ingredient('Steak', 2),
    //             new Ingredient('Asparagus', 4),
    //             new Ingredient('Cream', 2)
    //         ])
    //   ];
    private recipes: Recipe[] = [];

      constructor(private shoppingListService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice())
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}