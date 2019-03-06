import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist-item-component',
  templateUrl: './postlist-item-component.component.html',
  styleUrls: ['./postlist-item-component.component.css']
})
export class PostlistItemComponentComponent implements OnInit {

	@Input() commentaire;
  constructor() { }

  ngOnInit() {
  }

  getColor(){
  	if (this.commentaire.LoveIt>0 ) {return "green"; console.log("green")}
  		else if (this.commentaire.LoveIt<0){ return "red"; console.log("red")}
  }

  onLike(){
  	this.commentaire.loveIt= this.commentaire.loveIt+1;
  	console.log(" plus un j'aime :D"+ this.commentaire.loveIt);
  }

  onDislike(){
  	this.commentaire.loveIt= this.commentaire.loveIt-1;
  	console.log("plus un j'aime pas :(");
  }

}
