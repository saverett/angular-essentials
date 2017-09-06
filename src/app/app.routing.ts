import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {TodoComponent} from "./todo.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  // default/wildcard route; pathMatch required for redirects
  // 'full' means the entire URL matches the path
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});

