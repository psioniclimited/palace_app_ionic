import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  sliderOptions = {pager: true, autoHeight: true};

  // myColour: string  = 'green';

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();

  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // this.myColour = 'red';
    console.log('Current index is', currentIndex);
  }

  slideTapped(event) {
    // let index = this.slides.ge
    const index = event.clickedIndex;
    if (index === 1) {
      this.navCtrl.push(FacalitiesPage);
    }
    console.log(index);

    // console.log(event);
  }

}
