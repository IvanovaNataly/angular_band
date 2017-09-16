import {Component, Input, EventEmitter, Output} from '@angular/core';
import SingerModel from "../models/singerModel";

@Component({
    selector: 'singer-card',
    templateUrl: './singerCard.component.html',
    styleUrls: ['./singerCard.component.css'],
    inputs: ["singer"]
})

export default class SingerCardComponent {
    @Input()
    singer: SingerModel;

    @Output()
    onSelectToPlay: EventEmitter<SingerModel> = new EventEmitter<SingerModel>();

    backingState: boolean = false;

    /**
     * pay artist video
     * @param event
     */
    playVideo(event: any)
    {
        this.onSelectToPlay.emit(this.singer);
    }

    /**
     * image double click
     * @param event
     */
    imagePreview(event: any)
    {
        (!this.backingState) ? this.backingState = true : this.backingState = false;

    }
}

