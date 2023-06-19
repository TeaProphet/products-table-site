import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {ProductComponent} from "./components/product/product.component";
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsTablePageComponent } from './pages/products-table-page/products-table-page.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzSpinModule} from "ng-zorro-antd/spin";

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductComponent,
    ProductPageComponent,
    ProductsTablePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzImageModule,
    NgOptimizedImage,
    NzSpinModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
