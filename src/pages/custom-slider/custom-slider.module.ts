import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomSliderPage } from './custom-slider';
import {CustomRecreationSliderComponent} from "../../components/custom-recreation-slider/custom-recreation-slider";

@NgModule({
  declarations: [
    CustomSliderPage,
    CustomRecreationSliderComponent
  ],
  imports: [
    IonicPageModule.forChild(CustomSliderPage),
  ],
})
export class CustomSliderPageModule {}
