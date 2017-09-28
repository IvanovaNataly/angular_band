import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export default class HeroesComponent {
    heroesList: any[];
    private sub: any;

    constructor( private route: ActivatedRoute) {

        console.log("HeroDetailsComponent");

        this.heroesList = [
            {id: 1, name: "SpiderMan"},
            {id: 2, name: "SuperMan",},
            {id: 3, name: "Captain America"},
        ];
    }

    ngOnInit() {
        console.log(this.route.data);
        this.sub = this.route.data.subscribe(data => {

            //this.id = +paramMap['id']; // (+) converts string 'id' to a number
            console.log(data['title']);
            // In a real app: dispatch action to load the details here.
        });


    }

}