import { Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button (click)="pattern1()">Pattern 1</button>
    <button (click)="pattern2()">Pattern 2</button>
    <button (click)="clear()">Clear</button>
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
    img1.src = 'https://raw.githubusercontent.com/ashokweb/canvas-merge-images/main/src/assets/socks2.png';


    img1.onload = () => {
      canvas.width = img1.width;
      canvas.height = img1.height;
      console.log(this.selectedImg, 'image ss');
      if (context) {
        
        context.globalAlpha = 1.0;
        context.drawImage(img1, 0, 0);
        context.globalCompositeOperation = "source-atop";
        
        console.log('url', canvas.toDataURL('image/png'));
        const imgUrl = canvas.toDataURL('image/png');
        this.selectedImg = imgUrl;
      }
    };
  }

  pattern1() {
    console.log('hello');
    let canvas: HTMLCanvasElement = this.canvas.nativeElement;
    let context = canvas.getContext('2d');
    // if(context){
    //   context.beginPath();
    //   context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    //   // context.moveTo(110, 75);
    //   // context.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    //   context.stroke();
    // }
   
    let img = new Image();
    img.src =
      'https://raw.githubusercontent.com/ashokweb/canvas-merge-images/main/src/assets/pattern.png';
    img.crossOrigin = 'anonymous';

    
    //https://raw.githubusercontent.com/ashokweb/canvas-merge-images/main/src/assets/pattern2.png
  
    img.onload = () => {
      if (context) {
        this.drawClipped(context, img);
        // context.globalAlpha = 0.9;
        // context.drawImage(img, 0, 0, 420, 400);

        // console.log('url', canvas.toDataURL('image/jpeg'));
        const imgUrl = canvas.toDataURL('image/png');
        this.selectedImg = imgUrl;

        
      }
    };
  }

  drawClipped(context: any, myImage: any) {
    context.save();
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(288, 0, 388, 150);
    context.lineWidth = 10;
    context.quadraticCurveTo(288, 288, 188, 150);
    context.lineWidth = 10;
    context.clip();
    context.drawImage(myImage, 10, 50);
    context.restore();
 }

  pattern2() {
    console.log('hello');
    let canvas: HTMLCanvasElement = this.canvas.nativeElement;
    let context = canvas.getContext('2d');
   
    let img = new Image();
    img.src =
      'https://raw.githubusercontent.com/ashokweb/canvas-merge-images/main/src/assets/pattern2.png';
    img.crossOrigin = 'anonymous';

  
    img.onload = () => {
      if (context) {
        
        // context.globalAlpha = 1.0;
        context.drawImage(img, 0, 400, 420, 400);

        // console.log('url', canvas.toDataURL('image/jpeg'));
        const imgUrl = canvas.toDataURL('image/png');
        this.selectedImg = imgUrl;
      }
    };
  }

  clear(){
    let canvas: HTMLCanvasElement = this.canvas.nativeElement;
    let context = canvas.getContext('2d');
    if(context){
      context.clearRect(15, 118, 50, 180)
    }
  }
}

bootstrapApplication(App);
