import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandComponent } from './band.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandComponent],
  exports: [BandComponent]
})
export class BandModule { }
