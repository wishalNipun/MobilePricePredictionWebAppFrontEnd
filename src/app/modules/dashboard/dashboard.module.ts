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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApplicationComponent } from './components/application/application.component';


@NgModule({
  
  declarations: [
    DashboardComponent,
    HomeComponent,
    DetailComponent,
    ApplicationComponent,
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
    MatSelectModule ,
    MatTableModule, 
    MatPaginatorModule
  ]
})
export class DashboardModule { }
