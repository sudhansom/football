import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  placeBall(event: MouseEvent, color="white"): void {
    // Get the clicked position relative to the div
    const x = event.offsetX;
    const y = event.offsetY;

    // Create a mark (a small dot)
    const mark = document.createElement('div');
    mark.className = 'mark';

    // Position the mark at the clicked coordinates
    mark.style.left = x + 'px';
    mark.style.top = y + 'px';

    // Add background color dynamically
    mark.style.backgroundColor = color;

    // Append the mark to the div
    const target = event.currentTarget as HTMLElement;

    target.appendChild(mark);
  }
}
