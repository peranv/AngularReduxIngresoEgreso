import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { dashboardRoutes } from './dashboard/dashboar.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path: '', 
        component: DashboardComponent,
        children: 
            dashboardRoutes
        
    },
    {path: '**', redirectTo:''}
]

@NgModule({

    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule{}