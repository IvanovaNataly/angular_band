import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: "[lazyLoad]"
})

export default class LazyLoadDirective {

    @Input()
    lazyLoad: string;

    constructor(private elementRef: ElementRef) {
        // console.log(elementRef.nativeElement, this.lazyLoad);
    }

    ngOnInit() {
        let image = document.createElement("img");
        image.src = this.lazyLoad;
        image.addEventListener("load", event => {
            setTimeout(() => {
                this.elementRef.nativeElement.src = image.src;
            }, 2000)

        })
    }
}