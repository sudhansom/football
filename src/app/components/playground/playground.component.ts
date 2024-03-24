import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  ball: any = null;
  playerToMove : any = null;
  element: any;

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
    ball.style.background = "../../../assets/images/ball.png"

    // Add background color dynamically
    ball.title = x + '  ' + y;

    // Append the mark to the div
    const target = event.currentTarget as HTMLElement;

    target.appendChild(ball);
    }
  }

  getPosition(event: any){
    return event.offsetX;
  }

  moveBall(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.removeChild(this.ball);
    console.log(this.ball.title.split(' '));
    const [ x, z,  y] = this.ball.title.split(' ');
    this.ball = null;
    console.log('event',event.clientX, event.clientY);
    this.placeBall(event);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    console.log('dragged...', event)
    this.playerToMove = event;
    event.dataTransfer?.setData('text/plain', 'draggedItem');
  }

  @HostListener('click', ['$event'])
  onClick(event: DragEvent) {
    event.preventDefault();
    console.log(event);
  }

  @HostListener('dragover', ['$event.target', '$event'])
  onDragOver(target: HTMLElement, event: DragEvent) {
    event.preventDefault();
     if(!this.element){
      this.element = document.getElementById(target.id);
     }

    console.log('dragged1111...', target.id, event.screenX);
    this.element.style.left = event.screenX + 'px';
    this.element.style.top = event.screenY + 'px';
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.element = null;
  }
}
