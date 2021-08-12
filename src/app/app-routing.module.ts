import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MyPlaylistScreenComponent } from './my-playlist-screen/my-playlist-screen.component';

const routes: Routes = [
  //path for home and playlist.....if user does not enter anything takes him back to the homescreen
  {path:"home", component: HomeScreenComponent},
  {path:"playlist", component: MyPlaylistScreenComponent},
  {path:"*", component: HomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
