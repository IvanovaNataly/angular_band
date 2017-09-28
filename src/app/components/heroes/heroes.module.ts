import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import HeroesComponent from './/heroes.component';
import HeroDetailsComponent from '../heroDetails/heroDetails.component';

import HeroRoutingModule  from './heroes-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroesComponent,
        HeroDetailsComponent
    ]
})
export default class HeroesModule {}