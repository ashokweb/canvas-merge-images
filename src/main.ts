import { Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button (click)="generate('eyes')">Eyes</button>
    <button (click)="generate('mouth')">Mouth</button>
    <canvas #canvas class="d-none"></canvas>
    <img  crossorigin="anonymous" [src]="selectedImg" />
  `,
})
export class App {
  name = 'Angular';
  @ViewChild('canvas') canvas!: ElementRef;
  selectedImg: any = '';

  ngAfterViewInit() {
    console.log(this.selectedImg, 'helsslo');

    this.initialize();
  }
  initialize() {
    console.log('hello');
    let canvas: HTMLCanvasElement = this.canvas.nativeElement;
    let context = canvas.getContext('2d');

    let img1 = new Image();
    img1.crossOrigin = 'anonymous';
    img1.src = '../socks.png';

    img1.onload = () => {
      canvas.width = img1.width;
      canvas.height = img1.height;
      console.log(this.selectedImg, 'image ss');
      if (context) {
        // context.globalAlpha = 1.0;
        context.drawImage(img1, 0, 0);

        console.log('url', canvas.toDataURL('image/png'));
        const imgUrl = canvas.toDataURL('image/png');
        this.selectedImg = imgUrl;
      }
    };
  }

  generate(position: any) {
    console.log('hello');
    let canvas: HTMLCanvasElement = this.canvas.nativeElement;
    let context = canvas.getContext('2d');
    let img = new Image();
    if (position == 'eyes') {
      img.src =
        'https://raw.githubusercontent.com/lukechilds/merge-images/HEAD/test/fixtures/eyes.png';
      img.crossOrigin = 'anonymous';
    }

    if (position == 'mouth') {
      img.src =
        'https://raw.githubusercontent.com/lukechilds/merge-images/HEAD/test/fixtures/mouth.png';
      img.crossOrigin = 'anonymous';
    }

    img.onload = () => {
      if (context) {
        context.globalAlpha = 1.0;
        context.drawImage(img, 0, 0);

        // console.log('url', canvas.toDataURL('image/jpeg'));
        const imgUrl = canvas.toDataURL('image/png');
        this.selectedImg = imgUrl;
      }
    };
  }
}

bootstrapApplication(App);
