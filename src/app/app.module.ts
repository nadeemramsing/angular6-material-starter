import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: MaterialTableComponent },
  { path: '', component: DashboardComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MaterialTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
    //hashTag symbol appears
    //From what I understand, 
    
    //useHash: true => HashLocationStrategy used (https://angular.io/api/common/HashLocationStrategy)
    //location.go('/foo') => url becomes example.com/#/foo (i.e. prefix dismissed)

    //useHash: false => PathLocationStrategy used (https://angular.io/api/common/PathLocationStrategy)
    //location.go('/foo') => url becomes example.com/my/app/base/href/foo (APP_BASE_HREF must be provided)

    //How APP_BASE_HREF is provided:
    /* @NgModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app/base/href'}]
    }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
