import { Component, OnInit } from '@angular/core';
import { Band } from './band';
import { BandService } from './band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  bands: Array<Band> = [];
  average: number = 0;

  constructor(private bandService: BandService) { }

  getBands(){
    this.bandService.getBands().subscribe(bands => {
      this.bands = bands;
      this.average = this.getAverage(bands);
    })
  }

  ngOnInit() {
    this.getBands();
  }

  getAverage(bands: Band[]){
    let sum: number = 0;
    for(let band of bands){
      sum += band.numberOfMembers;
    }
    return Math.round((sum/bands.length));
  }

}
