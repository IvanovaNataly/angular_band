import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: "[lazyVideo]"
})

export default class LazyVideoDirective {

    @Input()
    lazyVideo: string;

    constructor(private elementRef: ElementRef) {
        console.log(elementRef.nativeElement, this.lazyVideo);
    }

    ngOnInit() {
        let iframe = document.createElement("iframe");
        iframe.src = this.lazyVideo;
        iframe.addEventListener("load", event => {
            setTimeout(() => {
                this.elementRef.nativeElement.src = iframe.src;
            }, 2000)

        })
    }
}