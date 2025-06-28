import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent implements OnInit {
  @Input() Images: string[] = [];
  @Input() ProjectName: any = "";

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }
  
  selectedIndex = 0;  
  startX = 0;
  endX = 0;

  constructor() { }

  ngOnInit(): void { }

  get selectedImage(): string {
    return this.Images[this.selectedIndex];
  }

  prev() {
    this.selectedIndex = (this.selectedIndex - 1 + this.Images.length) % this.Images.length;
  }

  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.Images.length;
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  // Touch start
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  // Touch end
  onTouchEnd(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const diff = this.endX - this.startX;
    const minSwipeDistance = 30;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff < 0) {
        this.next(); // swipe left
      } else {
        this.prev(); // swipe right
      }
    }
  }

}