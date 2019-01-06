import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheelOfFortunePage } from './wheel-of-fortune';

@NgModule({
  declarations: [
    WheelOfFortunePage,
  ],
  imports: [
    IonicPageModule.forChild(WheelOfFortunePage),
  ],
})
export class WheelOfFortunePageModule {}
