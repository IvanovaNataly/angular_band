import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-profile',
    templateUrl: './userProfile.component.html',
    styleUrls: ['./userProfile.component.css']

})

export default class UserProfileComponent {
    sub: any;
    page: any;

    constructor(private route: ActivatedRoute, private router: Router) {
        console.log("UserProfileComponent");
    }

    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.page = +params['page'] //|| 0;
            });
        console.log(this.page);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    nextPage() {
        this.router.navigate(['product-list'], { queryParams: { page: this.page + 1 } });
    }
}