import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClickOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clickOutside: EventEmitter<{}>;
    onClick(targetElement: any): void;
}
