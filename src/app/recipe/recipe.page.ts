import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  id: string;
  recipe: any = ["adobo", "kimchi", "menudo"];
  name: string;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    
    console.log(this.id);

    if(this.id === '1'){
      this.name = this.recipe[0];
    }else if(this.id === '2'){
      this.name = this.recipe[1];
    }else{
    this.name = this.recipe[2];
    }
  }
}
