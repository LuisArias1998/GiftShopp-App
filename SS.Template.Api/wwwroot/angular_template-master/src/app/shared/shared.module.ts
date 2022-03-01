import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import {
  NgbPaginationModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbProgressbarModule,
  NgbModalModule,
  NgbTypeaheadModule,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FileComponent } from './components/file/file.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { EmailDirective } from './directives/email.directive';
import {
  TablesortDirective,
  TablesortColDirective,
} from './directives/tablesort.directive';
import { EnumPipe } from './pipes/enum.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { PanelComponent } from './components/panel/panel.component';
import { TitleComponent } from './components/title/title.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VersionComponent } from './components/version/version.component';
import { DatetimepickerComponent } from './components/datetimepicker/datetimepicker.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { LoginAdminComponent } from './components/admin/login/loginAdmin.component';
import { IndexAdminComponent } from './components/admin/index/indexAdmin.component';
import { NavbarAdminComponent } from './components/admin/navbar/navbarAdmin.component';
import { AddProductComponent } from './components/admin/addProduct/addProduct.component';
import { ModifyProductComponent } from './components/admin/modifyProduct/modifyProduct.component';
import { OrdersHistoryComponent } from './components/admin/ordersHistory/ordersHistory.component';
import { HttpClientModule } from '@angular/common/http';




const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbProgressbarModule,
  NgbModalModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  HttpClientModule,
];

const declarations = [
  FileComponent,
  PanelComponent,
  TitleComponent,
  PaginationComponent,
  DatepickerComponent,
  LayoutComponent,
  VersionComponent,
  DatetimepickerComponent,
  CardComponent,
  AutofocusDirective,
  EmailDirective,
  TablesortDirective,
  TablesortColDirective,
  EnumPipe,
  YesNoPipe,
  
  LoginComponent,
  RegisterComponent,
  CartComponent,
  CheckoutComponent,
  NavbarComponent,
  FooterComponent,
  ProductComponent,

  LoginAdminComponent,
  IndexAdminComponent,
  NavbarAdminComponent,
  AddProductComponent,
  ModifyProductComponent,
  OrdersHistoryComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports, RouterModule, NgbPaginationModule],
  exports: [...declarations, ...imports],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class SharedModule {}
