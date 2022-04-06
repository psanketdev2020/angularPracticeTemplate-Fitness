import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  videItem:boolean = true;
  photoItem1:boolean = true;
  photoItem2:boolean = true;
  photoItem3:boolean = true;
  photoItem4:boolean = true;
  photoItem5:boolean = true;

  // active first tab
  selectItem = 'item1';

  constructor() { }

  ngOnInit(): void {
  }

  showAll(){
    this.videItem = true;
    this.photoItem1 = true;
    this.photoItem2 = true;
    this.photoItem3 = true;
    this.photoItem4 = true;
    this.photoItem5 = true;
  }

  showPhotos(){
    this.videItem = false;
    this.photoItem1 = true;
    this.photoItem2 = true;
    this.photoItem3 = true;
    this.photoItem4 = true;
    this.photoItem5 = true;
  }

  showVideo() {
    this.videItem = true;
    this.photoItem1 = false;
    this.photoItem2 = false;
    this.photoItem3 = false;
    this.photoItem4 = false;
    this.photoItem5 = false;
  }

}
