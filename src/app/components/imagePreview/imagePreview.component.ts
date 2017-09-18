import {Component, Input} from '@angular/core';
import SingerModel from "../../models/singerModel";

@Component({
    selector: 'image-preview',
    templateUrl: './imagePreview.component.html',
    styleUrls: ['./imagePreview.component.css'],
    inputs: ["image"]
})

export default class ImagePreviewComponent {
    @Input()
    singer: SingerModel;

    // constructor(private spinner: string) {
    //     this.spinner = "../../../assets/spinner_holdings.gif";
    // }
}
