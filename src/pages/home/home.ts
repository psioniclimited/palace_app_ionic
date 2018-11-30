import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  sliderOptions = { pager: true, autoHeight: true };
  // myColour: string  = 'green';

  constructor(public navCtrl: NavController,private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();

  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // this.myColour = 'red';
    console.log('Current index is', currentIndex);
  }

  slideWillCHange() {
    console.log('sdfsaldkjfhskldhfkshfksdjfh');
  }

}
