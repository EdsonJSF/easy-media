import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: MyPostsComponent },
      { path: 'all', component: AllPostsComponent },
      { path: 'create', component: CreatePostComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
