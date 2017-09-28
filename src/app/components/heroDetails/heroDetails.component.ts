import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroDetails.component.html',
    styleUrls: ['./heroDetails.component.css']
})

export default class HeroDetailsComponent implements OnInit, OnDestroy {
    id: number;
    private sub: any;

    constructor( private route: ActivatedRoute) {

        console.log("HeroDetailsComponent");

    }

    ngOnInit() {
        console.log(this.route.paramMap);
        this.sub = this.route.paramMap.subscribe(paramMap => {

            this.id = +paramMap['id']; // (+) converts string 'id' to a number
            console.log(paramMap['id']);
            // In a real app: dispatch action to load the details here.
        });


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}