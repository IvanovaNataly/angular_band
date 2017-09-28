import { Component } from '@angular/core';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export default class HeroesComponent {
    heroesList: any[];

    constructor() {
        this.heroesList = [
            {id: 1},
            {id: 2},
            {id: 3},
        ];
    }


}