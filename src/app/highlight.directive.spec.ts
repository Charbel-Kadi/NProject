import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
 const desc: ElementRef = new ElementRef(document.createElement('div'));

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(desc);
    expect(directive).toBeTruthy();
    directive.appHighlight = 'lightblue';
    directive.onMouseEnter();
    directive.onMouseLeave();
  });
});