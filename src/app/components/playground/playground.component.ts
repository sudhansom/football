import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  ball: any = null;

  placeBall(event: MouseEvent): void {
    // Get the clicked position relative to the div
    if(!this.ball){
      const x = event.offsetX;
    const y = event.offsetY;

    // Create a mark (a small dot)
    const ball = document.createElement('div');
    this.ball = ball;
    ball.className = 'ball';

    // Position the mark at the clicked coordinates
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    // Add background color dynamically
    ball.title = x + '  ' + y;

    // Append the mark to the div
    const target = event.currentTarget as HTMLElement;

    target.appendChild(ball);
    }
  }

  moveBall(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.removeChild(this.ball);
    console.log(this.ball.title.split(' '));
    const [ x, z,  y] = this.ball.title.split(' ');
    this.ball = null;
    this.placeBall(event);
  }
}
