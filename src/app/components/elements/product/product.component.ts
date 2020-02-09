import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PRODUCT = [
    {
      id: 1867,
      name: 'Dream Daddy Simulator',
      description: "Dream Daddy: A Dad Dating Simulator is a game where you play as a Dad and your goal is to meet and romance other hot Dads. You and your daughter have just moved into the sleepy seaside town of Maple Bay only to discover that everyone in your neighborhood is a single, dateable Dad! Will you go out with Teacher Dad? Goth Dad? Bad Dad? Or any of the other cool Dads in this game? With minigames, sidequests, and a variety of paths and endings, Dream Daddy: A Dad Dating Simulator is this year's most anticipated Dad-based game.",
      price: 69.00,
      imgUrl: "https://symulatorypc.pl/wp-content/uploads/2017/11/Dream-Daddy-A-Dad-Dating-Simulator-skidrow.jpg.webp"
    }
  ]

}
