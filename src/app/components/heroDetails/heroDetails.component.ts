import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroDetails.component.html',
    styleUrls: ['./heroDetails.component.css']
})

export default class HeroDetailsComponent implements OnInit {
    id: number;
    private sub: any;

    constructor( private route: ActivatedRoute) {

        console.log("HeroDetailsComponent");

    }

    ngOnInit() {
        // console.log(this.route.params.value.id);
        this.sub = this.route.params.subscribe(params => {
            console.log(this.route.params);
            //this.id = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });


    }

    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }
}