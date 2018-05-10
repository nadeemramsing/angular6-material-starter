import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialTableComponent } from './material-table/material-table.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: MaterialTableComponent },
];