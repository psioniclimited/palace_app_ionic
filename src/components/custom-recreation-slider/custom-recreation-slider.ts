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
    var showItemHolderClasses = '.show-item' + el;
    var hideItemHolderClasses = '.hide-item' + el;

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


    this.triggerSlider(el);
    this.showText(el);
    this.preHideItem(showItemHolderClasses, hideItemHolderClasses);
    this.itemHideAndSeek(item, afterItem, beforeItem, farAfterItem, farBeforeItem, hideItems);
    this.adjacentItemsResizing(
      item, afterItem, beforeItem, farAfterItem, farBeforeItem, itemPosition, farAfterItemPosition,
      farBeforeItemPosition, afterItemPosition, beforeItemPosition );

  }

  showText(el:string) {
    var textClass = '.custom-paragraph-' + el;
    $('.paragraph').css({ opacity: '0', transition: '0.3s'});
    $('' + textClass).css({ opacity: '1', transition: '0.7s'});
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

    $('' + item).css({ transform: 'scale(1.25)'});
    $('' + farAfterItem).css({ transform: 'scale(0.9)' });
    $('' + farBeforeItem).css({ transform: 'scale(0.9)'});
    $('' + afterItem).css({ transform: 'scale(1.05)' });
    $('' + beforeItem).css({ transform: 'scale(1.05)' });
  }

  preHideItem(showItemHolderClasses:string, hideItemHolderClasses:string) {
    $('' + showItemHolderClasses).show();
    $('' + hideItemHolderClasses).hide();
  }

  itemHideAndSeek(item:string, afterItem:string, beforeItem:string, farAfterItem:string, farBeforeItem:string, hideItems:string) {

    $('' + hideItems).css({ opacity: '0', transition: '0.35s' });
    setTimeout(function(){
      $('' + hideItems).hide();
    }, 350);


    $('' + item).show();
    setTimeout(function(){
      $('' + item).css({ opacity: '1', transition: '0.4s' });
    }, 400);

    $('' + afterItem).show();
    $('' + beforeItem).show();
    setTimeout(function(){
      $('' + afterItem).css({ opacity: '1', transition: '0.40s' });
      $('' + beforeItem).css({ opacity: '1', transition: '0.40s' });
    }, 400);

    $('' + farAfterItem).show();
    $('' + farBeforeItem ).show();
    setTimeout(function(){
      $('' + farAfterItem).css({ opacity: '1', transition: '0.5s' });
      $('' + farBeforeItem ).css({ opacity: '1', transition: '0.5s' });
    }, 500);

  }

  triggerSlider(el:string) {
    if(el === '01') {
      $(".large-img-item01").css({ opacity: '1', transform: 'translate(0, 0)', transition: '0.5s'});

      $(".large-img-item02").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '02') {
      $(".large-img-item02").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item03").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '03') {
      $(".large-img-item03").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item04").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '04') {
      $(".large-img-item04").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item05").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '05') {
      $(".large-img-item05").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item06").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '06') {
      $(".large-img-item06").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item07").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '07') {
      $(".large-img-item07").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item08").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '08') {
      $(".large-img-item08").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item09").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(100%, 0)'});

    }
    else if(el === '09') {
      $(".large-img-item09").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item10").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '10') {
      $(".large-img-item10").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item11").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '11') {
      $(".large-img-item11").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item12").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '12') {
      $(".large-img-item12").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item13").css({ opacity: '0', transform: 'translate(-100%, 0)'});
      $(".large-img-item01").css({ opacity: '0', transform: 'translate(-110%, 0)'});
      $(".large-img-item02").css({ opacity: '0', transform: 'translate(-120%, 0)'});
      $(".large-img-item03").css({ opacity: '0', transform: 'translate(-130%, 0)'});
      $(".large-img-item04").css({ opacity: '0', transform: 'translate(-140%, 0)'});
      $(".large-img-item05").css({ opacity: '0', transform: 'translate(-150%, 0)'});
      $(".large-img-item06").css({ opacity: '0', transform: 'translate(150%, 0)'});
      $(".large-img-item07").css({ opacity: '0', transform: 'translate(140%, 0)'});
      $(".large-img-item08").css({ opacity: '0', transform: 'translate(130%, 0)'});
      $(".large-img-item09").css({ opacity: '0', transform: 'translate(120%, 0)'});
      $(".large-img-item10").css({ opacity: '0', transform: 'translate(110%, 0)'});
      $(".large-img-item11").css({ opacity: '0', transform: 'translate(100%, 0)'});
    }
    else if(el === '13') {
      $(".large-img-item13").css({ opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item01").css({ transform: 'translate(-100%, 0)'});
      $(".large-img-item02").css({ transform: 'translate(-110%, 0)'});
      $(".large-img-item03").css({ transform: 'translate(-120%, 0)'});
      $(".large-img-item04").css({ transform: 'translate(-130%, 0)'});
      $(".large-img-item05").css({ transform: 'translate(-140%, 0)'});
      $(".large-img-item06").css({ transform: 'translate(-150%, 0)'});
      $(".large-img-item07").css({ transform: 'translate(150%, 0)'});
      $(".large-img-item08").css({ transform: 'translate(140%, 0)'});
      $(".large-img-item09").css({ transform: 'translate(130%, 0)'});
      $(".large-img-item10").css({ transform: 'translate(120%, 0)'});
      $(".large-img-item11").css({ transform: 'translate(110%, 0)'});
      $(".large-img-item12").css({ transform: 'translate(100%, 0)'});
    }
  }
}
