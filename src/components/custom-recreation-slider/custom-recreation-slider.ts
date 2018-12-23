import { Component } from '@angular/core';
import * as $ from 'jquery';
/**
 * Generated class for the CustomRecreationSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-recreation-slider',
  templateUrl: 'custom-recreation-slider.html'
})
export class CustomRecreationSliderComponent {

  text: string;

  constructor() {

  }
  itemOnClick() {
    console.log('hello');
      $('.item_13').trigger('click');

  }
}
