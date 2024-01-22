import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  
  declarations: [
    DashboardComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule, 
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    HttpClientModule,
    MatSelectModule 
  ]
})
export class DashboardModule { }
