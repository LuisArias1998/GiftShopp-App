import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './main/main.component';

import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductComponent } from './shared/components/product/product.component';
import { LoginAdminComponent } from './shared/components/admin/login/loginAdmin.component';
import { IndexAdminComponent } from './shared/components/admin/index/indexAdmin.component';
import { AddProductComponent } from './shared/components/admin/addProduct/addProduct.component';
import { ModifyProductComponent } from './shared/components/admin/modifyProduct/modifyProduct.component';
import { OrdersHistoryComponent } from './shared/components/admin/ordersHistory/ordersHistory.component';
import { LoggedGuard } from './core/guards/logged.guard';
import { AuthAdminGuard } from './core/guards/admin/auth-admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainComponent,
    
    data: {
      title: 'app.HOME'
    },
    children: [
      {
        path: 'examples',
        component: LayoutComponent,
        loadChildren: './examples/examples.module#ExamplesModule',
        data: {
          title: 'examples.$TITLE'
        }
      },
    ]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {path:"login", component:LoginComponent, canActivate: [LoggedGuard]},
  {path:"register", component:RegisterComponent, canActivate: [LoggedGuard]},
  {path:"cart", component:CartComponent},
  {path:"product/:id", component:ProductComponent},

  {path:"admin", component:LoginAdminComponent},
  {path:'index',component:IndexAdminComponent, canActivate:[AuthAdminGuard]},
  {path:'addProduct', component:AddProductComponent, canActivate:[AuthAdminGuard]},
  {path:'modifyProduct/:id', component:ModifyProductComponent, canActivate:[AuthAdminGuard]},
  {path:'ordersHistory', component:OrdersHistoryComponent, canActivate:[AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
