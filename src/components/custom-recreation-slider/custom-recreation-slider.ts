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
    var item = '.item_' + el;
    var afterItem = '.a' + el;
    var beforeItem = '.b' + el;
    var farAfterItem = '.far-a' + el;
    var farBeforeItem = '.far-b' + el;
    var hideItems = '.hide-for-item' + el;

    var itemPosition = '.item' + el;
    var farAfterItemPosition = '.postion-' + 'far-a' + el;
    var farBeforeItemPosition = '.postion-' + 'far-b' + el;
    var afterItemPosition = '.postion-' + 'a' + el;
    var beforeItemPosition = '.postion-' + 'b' + el;

    this.itemHideAndSeek(item, afterItem, beforeItem, farAfterItem, farBeforeItem, hideItems);
    this.adjacentItemsResizing(
      item, afterItem, beforeItem, farAfterItem, farBeforeItem, itemPosition, farAfterItemPosition,
      farBeforeItemPosition, afterItemPosition, beforeItemPosition );

  }

  adjacentItemsResizing( item:string, afterItem:string,
                         beforeItem:string, farAfterItem:string, farBeforeItem:string, itemPosition:string,
                         farAfterItemPosition:string, farBeforeItemPosition:string, afterItemPosition:string, beforeItemPosition:string )
  {

    $('' + itemPosition).css({ margin: '-10px 0 0 0'});
    $('' + farAfterItemPosition).css({ margin: '-25px 0 0 0'});
    $('' + farBeforeItemPosition).css({ margin: '-25px 0 0 0'});
    $('' + afterItemPosition).css({ margin: '-10px 0 0 0'});
    $('' + beforeItemPosition).css({ margin: '-10px 0 0 0'});

    $('' + item).css({ transform: 'scale(1.2)'});
    $('' + farAfterItem).css({ transform: 'scale(0.9)' });
    $('' + farBeforeItem).css({ transform: 'scale(0.9)'});
    $('' + afterItem).css({ transform: 'scale(1.05)' });
    $('' + beforeItem).css({ transform: 'scale(1.05)' });
  }

  itemHideAndSeek(item:string, afterItem:string, beforeItem:string, farAfterItem:string, farBeforeItem:string, hideItems:string) {
    $('' + hideItems).css({ opacity: '0', transition: '0.35s' });
    setTimeout(function(){
      $('' + hideItems).css({ display: 'none'});
    }, 350);

    $('' + item).css({ display: 'inherit'});
    setTimeout(function(){
      $('' + item).css({ opacity: '1', transition: '0.4s' });
    }, 400);

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
