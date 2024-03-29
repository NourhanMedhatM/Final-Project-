import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';

const routes: Routes = [
  { path: '', component:HomeComponent  },
  { path: 'about', component:AboutComponent },
  { path: 'contactus', component:ContactusComponent },
  { path: 'shop', component:ShopComponent  },
  { path: 'shop-single', component:ShopSingleComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
