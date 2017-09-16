import { Component } from '@angular/core';
import SingerModel from '../models/singerModel';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import UserService from "../services/userService";

@Component({
    selector: 'main-container',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']

})

export class MainContainerComponent {
    singers: SingerModel[];

    videoSource: SafeUrl;

    name: string = '';

    constructor(private sanitizer: DomSanitizer, private userService: UserService) {
        this.singers = [
            new SingerModel("Snatam Kaur", "../src/assets/snatam.jpeg", "https://www.youtube.com/embed/LYDPdd1MOcA"),
            new SingerModel("Uma Mohan", "../src/assets/mohan.jpeg"),
            new SingerModel("Deva Premal", "../src/assets/premal.jpeg")
        ];

        this.singers[2].addVideoUrl("https://www.youtube.com/embed/BSmToj9VZ4s");
        this.singers[1].addVideoUrl("https://www.youtube.com/embed/1I23gABHrnM");

        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);

    }

    onSelectToPlay(singer: SingerModel) {
        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(singer.videoUrl);
    }

    saveName() {
        this.userService.sendToLocalStorage(this.name, "loggedInUser");
    }



}