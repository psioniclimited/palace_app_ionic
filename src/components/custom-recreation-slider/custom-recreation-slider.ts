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
  itemOnClick(el:string) {
    console.log('hello =>' + el);
      // $('.item_13').trigger('click');
  this.itemHideAndSeek(el);
  }

  itemHideAndSeek(el:string) {
    var item = '.item_' + el;
    var afterItem = '.a' + el;
    var beforeItem = '.b' + el;
    var farAfterItem = '.far-a' + el;
    var farBeforeItem = '.far-b' + el;
    var hideItems = '.hide-for-item' + el;

    $('' + hideItems).css({ opacity: '0', transition: '0.35s' });
    setTimeout(function(){
      $('' + hideItems).css({ display: 'none'});
    }, 350);

    $('' + item).css({ display: 'inherit'});
    setTimeout(function(){
      $('' + item).css({ opacity: '1', transition: '0.39s' });
    }, 390);

    $('' + afterItem).css({ display: 'inherit'});
    $('' + beforeItem).css({ display: 'inherit'});
    setTimeout(function(){
      $('' + afterItem).css({ opacity: '1', transition: '0.40s' });
      $('' + beforeItem).css({ opacity: '1', transition: '0.40s' });
    }, 400);

    $('' + farAfterItem).css({ display: 'inherit'});
    $('' + farBeforeItem ).css({ display: 'inherit'});
    setTimeout(function(){
      $('' + farAfterItem).css({ opacity: '1', transition: '0.5s' });
      $('' + farBeforeItem ).css({ opacity: '1', transition: '0.5s' });
    }, 500);

  }
}
