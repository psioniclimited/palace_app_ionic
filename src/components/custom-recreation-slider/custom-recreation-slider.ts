import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'custom-recreation-slider',
  templateUrl: 'custom-recreation-slider.html'
})
export class CustomRecreationSliderComponent implements OnInit{

  text: string;
  prevEl: string  = '01';
  constructor() {

  }

  //###################################################################################################################
  ngOnInit() {
    this.loadScript('../assets/js/path-slider.js');
    this.loadScript('../assets/js/demo1.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  //####################################################################################################################
  swipeEvent(e, el:string) {

    if(this.prevEl === '01') {

      if(e.deltaX > 0) {
        $('.item_02' ).trigger('click');
        this.triggerSlider('02');
        this.prevEl = '02';
      }
      else if (e.deltaX < 0) {
        $('.orItem_13').trigger('click');
        this.triggerSlider('13');
        this.prevEl = '26';
      }
    }

   else if(this.prevEl === '02') {

      if(e.deltaX > 0) {
        $('.item_03').trigger('click');
        this.triggerSlider('03');
        this.prevEl = '03';
      }
      else if (e.deltaX < 0) {
        $('.item_01').trigger('click');
        this.triggerSlider('01');
        this.prevEl = '01';
      }
    }

    else if(this.prevEl === '03') {

      if(e.deltaX > 0) {
        $('.item_04').trigger('click');
        this.triggerSlider('04');
        this.prevEl = '04';
      }
      else if (e.deltaX < 0) {
        $('.item_02').trigger('click');
        this.triggerSlider('02');
        this.prevEl = '02';
      }
    }

    else if(this.prevEl === '04') {

      if(e.deltaX > 0) {
        $('.item_05').trigger('click');
        this.triggerSlider('05');
        this.prevEl = '05';
      }
      else if (e.deltaX < 0) {
        $('.item_03').trigger('click');
        this.triggerSlider('03');
        this.prevEl = '03';
      }
    }

    else if(this.prevEl === '05') {

      if(e.deltaX > 0) {
        $('.item_06').trigger('click');
        this.triggerSlider('06');
        this.prevEl = '06';
      }
      else if (e.deltaX < 0) {
        $('.item_04').trigger('click');
        this.triggerSlider('04');
        this.prevEl = '04';
      }
    }

    else if(this.prevEl === '06') {

      if(e.deltaX > 0) {
        $('.item_07').trigger('click');
        this.triggerSlider('07');
        this.prevEl = '07';
      }
      else if (e.deltaX < 0) {
        $('.item_05').trigger('click');
        this.triggerSlider('05');
        this.prevEl = '05';
      }
    }

    else if(this.prevEl === '07') {

      if(e.deltaX > 0) {
        $('.item_08').trigger('click');
        this.triggerSlider('08');
        this.prevEl = '08';
      }
      else if (e.deltaX < 0) {
        $('.item_06').trigger('click');
        this.triggerSlider('06');
        this.prevEl = '06';
      }
    }

    else if(this.prevEl === '08') {

      if(e.deltaX > 0) {
        $('.item_09').trigger('click');
        this.triggerSlider('09');
        this.prevEl = '09';
      }
      else if (e.deltaX < 0) {
        $('.item_07').trigger('click');
        this.triggerSlider('07');
        this.prevEl = '07';
      }
    }

    else if(this.prevEl === '09') {

      if(e.deltaX > 0) {
        $('.item_10').trigger('click');
        this.triggerSlider('10');
        this.prevEl = '10';
      }
      else if (e.deltaX < 0) {
        $('.item_08').trigger('click');
        this.triggerSlider('08');
        this.prevEl = '08';
      }
    }

    else if(this.prevEl === '10') {

      if(e.deltaX > 0) {
        $('.item_11').trigger('click');
        this.triggerSlider('11');
        this.prevEl = '11';
      }
      else if (e.deltaX < 0) {
        $('.item_09').trigger('click');
        this.triggerSlider('09');
        this.prevEl = '09';
      }
    }

    else if(this.prevEl === '11') {

      if(e.deltaX > 0) {
        $('.item_12').trigger('click');
        this.triggerSlider('12');
        this.prevEl = '12';
      }
      else if (e.deltaX < 0) {
        $('.item_10').trigger('click');
        this.triggerSlider('10');
        this.prevEl = '10';
      }
    }

    else if(this.prevEl === '12') {

      if(e.deltaX > 0) {
        $('.item_13').trigger('click');
        this.triggerSlider('13');
        this.prevEl = '13';
      }
      else if (e.deltaX < 0) {
        $('.item_11').trigger('click');
        this.triggerSlider('11');
        this.prevEl = '11';
      }
    }

    else if(this.prevEl === '13') {

      if(e.deltaX > 0) {
        $('.orItem_01').trigger('click');
        this.triggerSlider('01');
        this.prevEl = '14';
      }
      else if (e.deltaX < 0) {
        $('.item_12').trigger('click');
        this.triggerSlider('12');
        this.prevEl = '12';
      }
    }

    else if(this.prevEl === '14') {

      if(e.deltaX > 0) {
        $('.orItem_02').trigger('click');
        this.triggerSlider('02');
        this.prevEl = '15';
      }
      else if (e.deltaX < 0) {
        $('.item_13').trigger('click');
        this.triggerSlider('13');
        this.prevEl = '13';
      }
    }

    else if(this.prevEl === '15') {

      if(e.deltaX > 0) {
        $('.orItem_03').trigger('click');
        this.triggerSlider('03');
        this.prevEl = '16';
      }
      else if (e.deltaX < 0) {
        $('.orItem_01').trigger('click');
        this.triggerSlider('01');
        this.prevEl = '14';
      }
    }

    else if(this.prevEl === '16') {

      if(e.deltaX > 0) {
        $('.orItem_04').trigger('click');
        this.triggerSlider('04');
        this.prevEl = '17';
      }
      else if (e.deltaX < 0) {
        $('.orItem_02').trigger('click');
        this.triggerSlider('02');
        this.prevEl = '15';
      }
    }

    else if(this.prevEl === '17') {

      if(e.deltaX > 0) {
        $('.orItem_05').trigger('click');
        this.triggerSlider('05');
        this.prevEl = '18';
      }
      else if (e.deltaX < 0) {
        $('.orItem_03').trigger('click');
        this.triggerSlider('03');
        this.prevEl = '16';
      }
    }

    else if(this.prevEl === '18') {

      if(e.deltaX > 0) {
        $('.orItem_06').trigger('click');
        this.triggerSlider('06');
        this.prevEl = '19';
      }
      else if (e.deltaX < 0) {
        $('.orItem_04').trigger('click');
        this.triggerSlider('04');
        this.prevEl = '17';
      }
    }

    else if(this.prevEl === '19') {

      if(e.deltaX > 0) {
        $('.orItem_07').trigger('click');
        this.triggerSlider('07');
        this.prevEl = '20';
      }
      else if (e.deltaX < 0) {
        $('.orItem_05').trigger('click');
        this.triggerSlider('05');
        this.prevEl = '18';
      }
    }

    else if(this.prevEl === '20') {

      if(e.deltaX > 0) {
        $('.orItem_08').trigger('click');
        this.triggerSlider('08');
        this.prevEl = '21';
      }
      else if (e.deltaX < 0) {
        $('.orItem_06').trigger('click');
        this.triggerSlider('06');
        this.prevEl = '19';
      }
    }

    else if(this.prevEl === '21') {

      if(e.deltaX > 0) {
        $('.orItem_09').trigger('click');
        this.triggerSlider('09');
        this.prevEl = '22';
      }
      else if (e.deltaX < 0) {
        $('.orItem_07').trigger('click');
        this.triggerSlider('07');
        this.prevEl = '20';
      }
    }

    else if(this.prevEl === '22') {

      if(e.deltaX > 0) {
        $('.orItem_10').trigger('click');
        this.triggerSlider('10');
        this.prevEl = '23';
      }
      else if (e.deltaX < 0) {
        $('.orItem_08').trigger('click');
        this.triggerSlider('08');
        this.prevEl = '21';
      }
    }

    else if(this.prevEl === '23') {

      if(e.deltaX > 0) {
        $('.orItem_11').trigger('click');
        this.triggerSlider('11');
        this.prevEl = '24';
      }
      else if (e.deltaX < 0) {
        $('.orItem_09').trigger('click');
        this.triggerSlider('09');
        this.prevEl = '22';
      }
    }

    else if(this.prevEl === '24') {

      if(e.deltaX > 0) {
        $('.orItem_12').trigger('click');
        this.triggerSlider('12');
        this.prevEl = '25';
      }
      else if (e.deltaX < 0) {
        $('.orItem_10').trigger('click');
        this.triggerSlider('10');
        this.prevEl = '23';
      }
    }

    else if(this.prevEl === '25') {

      if(e.deltaX > 0) {
        $('.orItem_13').trigger('click');
        this.triggerSlider('13');
        this.prevEl = '26';
      }
      else if (e.deltaX < 0) {
        $('.orItem_11').trigger('click');
        this.triggerSlider('11');
        this.prevEl = '24';
      }
    }

    else if(this.prevEl === '26') {

      if(e.deltaX > 0) {
        $('.item_01').trigger('click');
        this.triggerSlider('01');
        this.prevEl = '01';
      }
      else if (e.deltaX < 0) {
        $('.orItem_12').trigger('click');
        this.triggerSlider('12');
        this.prevEl = '25';
      }
    }
  }


  itemOnClick(el:string) {
    console.log('hello =>' + el);

    // $('.item_13').trigger('click');
    var showItemHolderClasses = '.show-item' + el;
    var hideItemHolderClasses = '.hide-item' + el;

    var item = '.item_' + el;
    var orItem = '.orItem_' + el;
    var afterItem = '.a' + el;
    var beforeItem = '.b' + el;
    var farAfterItem = '.far-a' + el;
    var farBeforeItem = '.far-b' + el;

    this.triggerSlider(el);
    this.showText(el);
    this.preHideItem(showItemHolderClasses, hideItemHolderClasses);
    this.adjacentItemsResizing(item, afterItem, beforeItem, farAfterItem, farBeforeItem, orItem );

  }

  showText(el:string) {
    var textClass = '.custom-paragraph-' + el;
    $('.paragraph').css({ opacity: '0', transition: '0.3s'});
    $('' + textClass).css({ opacity: '1', transition: '1s'});
  }


  preHideItem(showItemHolderClasses:string, hideItemHolderClasses:string) {
    $('' + showItemHolderClasses).show(300);
    $('' + hideItemHolderClasses).hide(300);
  }

  adjacentItemsResizing( item:string, afterItem:string, beforeItem:string, farAfterItem:string, farBeforeItem:string, orItem:string) {


    $('' + item).css({ transform: 'scale(1.25)'})
    $('' + orItem).css({ transform: 'scale(1.25)'});

    $('' + farAfterItem).css({ transform: 'scale(0.9)' });
    $('' + farBeforeItem).css({ transform: 'scale(0.9)'});
    $('' + afterItem).css({ transform: 'scale(1.05)' });
    $('' + beforeItem).css({ transform: 'scale(1.05)' });
  }


  triggerSlider(el:string) {
    if(el === '01') {
      $(".large-img-item01").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)', transition: '0.5s'});

      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '02') {
      $(".large-img-item02").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '03') {
      $(".large-img-item03").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '04') {
      $(".large-img-item04").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '05') {
      $(".large-img-item05").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '06') {
      $(".large-img-item06").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '07') {
      $(".large-img-item07").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '08') {
      $(".large-img-item08").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});

    }
    else if(el === '09') {
      $(".large-img-item09").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '10') {
      $(".large-img-item10").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '11') {
      $(".large-img-item11").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '12') {
      $(".large-img-item12").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item13").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
    else if(el === '13') {
      $(".large-img-item13").css({ zIndex : '1', opacity: '1', transform: 'translate(0, 0)' , transition: '0.5s'});

      $(".large-img-item01").css({ zIndex : '-1', opacity: '1', transform: 'translate(-100%, 0)'});
      $(".large-img-item02").css({ zIndex : '-1', opacity: '1', transform: 'translate(-110%, 0)'});
      $(".large-img-item03").css({ zIndex : '-1', opacity: '1', transform: 'translate(-120%, 0)'});
      $(".large-img-item04").css({ zIndex : '-1', opacity: '1', transform: 'translate(-130%, 0)'});
      $(".large-img-item05").css({ zIndex : '-1', opacity: '1', transform: 'translate(-140%, 0)'});
      $(".large-img-item06").css({ zIndex : '-1', opacity: '1', transform: 'translate(-150%, 0)'});
      $(".large-img-item07").css({ zIndex : '-1', opacity: '1', transform: 'translate(150%, 0)'});
      $(".large-img-item08").css({ zIndex : '-1', opacity: '1', transform: 'translate(140%, 0)'});
      $(".large-img-item09").css({ zIndex : '-1', opacity: '1', transform: 'translate(130%, 0)'});
      $(".large-img-item10").css({ zIndex : '-1', opacity: '1', transform: 'translate(120%, 0)'});
      $(".large-img-item11").css({ zIndex : '-1', opacity: '1', transform: 'translate(110%, 0)'});
      $(".large-img-item12").css({ zIndex : '-1', opacity: '1', transform: 'translate(100%, 0)'});
    }
  }
}
