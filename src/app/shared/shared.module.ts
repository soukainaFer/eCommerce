import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule
    
    
    

  ],
  exports : [
    HeaderComponent,
    SelectComponent,
    BrowserModule,
    RouterModule,
    FormsModule,
    FooterComponent

  ]
})
export class SharedModule { }
