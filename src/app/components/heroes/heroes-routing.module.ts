import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import HeroesComponent from './/heroes.component';
import HeroDetailsComponent from '../heroDetails/heroDetails.component';

const heroesRoutes: Routes = [
    { path: 'heroes',  component: HeroesComponent, data: {title: "Heroes | Main Page"} },
    { path: 'heroDetails/:id', component: HeroDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export default class HeroRoutingModule { }