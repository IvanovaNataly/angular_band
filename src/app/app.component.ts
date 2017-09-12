import { Component } from '@angular/core';
import Singer from './models/singer.module';

import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = "Best Mantra Singers";
    singers: [Singer];
    constructor() {
        this.singers = [
            new Singer("Snatam Kaur", "../src/assets/snatam.jpeg"),
            new Singer("Deva Premal", "../src/assets/premal.jpeg"),
            new Singer("Uma Mohan", "../src/assets/mohan.jpeg")
        ];

        this.singers[2].isIndian = true;

        this.onPlay(this.singers[1]);
    }

    onPlay(singer: Singer) {
        this.title = "Singing ".concat(singer.name);
        console.log(this);
    }


}