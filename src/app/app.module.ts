import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component'; 
import { FormsModule } from '@angular/forms';
import { PostlistItemComponentComponent } from './postlist-item-component/postlist-item-component.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostlistItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
