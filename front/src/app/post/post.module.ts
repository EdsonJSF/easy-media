import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AllPostsComponent,
    CreatePostComponent,
    HeaderComponent,
    HomeComponent,
    MyPostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
})
export class PostModule {}
