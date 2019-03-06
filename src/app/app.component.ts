import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  post= 
  [
  	{
  		title:"Mon premier post",
  		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  		loveIt:3,
  		created_at: new Date()
  	},
  	{
  		title:"Mon deuxiéme post",
  		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  		loveIt:-2,
  		created_at: new Date()
  	},
  	{
  		title:"Encore un  post",
  		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  		loveIt:0,
  		created_at: new Date()
  	}
  ]
}
