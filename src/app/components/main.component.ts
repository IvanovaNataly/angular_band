import { Component } from '@angular/core';
import SingerModel from '../models/singerModel';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import UserService from "../services/userService";
import BandService from '../services/band.service';

@Component({
    selector: 'main-container',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']

})

export class MainContainerComponent {
    singers: SingerModel[];

    videoSource: SafeUrl;

    name: string = '';

    constructor(private sanitizer: DomSanitizer, private userService: UserService, private bandService: BandService) {
        // this.singers = [
        //     new SingerModel("Snatam Kaur", "../src/assets/snatam.jpeg", "https://www.youtube.com/embed/LYDPdd1MOcA"),
        //     new SingerModel("Uma Mohan", "../src/assets/mohan.jpeg"),
        //     new SingerModel("Deva Premal", "../src/assets/premal.jpeg")
        // ];

        // this.singers[2].addVideoUrl("https://www.youtube.com/embed/BSmToj9VZ4s");
        // this.singers[1].addVideoUrl("https://www.youtube.com/embed/1I23gABHrnM");
        //
        // this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);

    }

    ngOnInit() {
        this.bandService.getSingers()
            .then(response => {
                this.singers = response;
                this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);
                console.log("Singers ", response, "videoSource", this.videoSource);
            },
                error => {console.log("Error in Promise")})
            .catch(error => {
                {console.log("Error in Promise")}
            })
    }

    // ngOnInit() //Edan's version
    // {
    //     this.bandService.getSingers().then(data => {
    //
    //         this.singers = data;
    //         console.log("Singers ", data);
    //
    //     }, error => {
    //
    //     }).catch(error => {
    //
    //     });
    // }


    onSelectToPlay(singer: SingerModel) {
        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(singer.videoUrl);
    }

    //localStorage version
    // saveName() {
    //     this.userService.sendToLocalStorage(this.name, "loggedInUser");
    // }


    // /**
    //  * save user's name as class property
    //  * @param event
    //  */
    // saveName(event: any)
    // {
    //     event.preventDefault();
    //     this.userService.name = this.name;
    // }
    //
    // /**
    //  *
    //  * @param event
    //  */
    // saveUser(event: any)
    // {
    //     console.log("POST REQUEST");
    //
    //     this.userService.saveUser(this.name);
    // }



}