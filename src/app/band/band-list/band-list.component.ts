import { Component, OnInit } from '@angular/core';
import { BandDetail } from '../band-detail';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Array<BandDetail> = [];
  selectedBand!: BandDetail;
  selected: boolean = false;

  constructor(private bandService: BandService) { }

  getBands(){
    this.bandService.getBands().subscribe(bands=>{
      this.bands = bands;
    })
  }

  selectBand(band: BandDetail){
    this.selectedBand = band;
    this.selected = true;
  }

  ngOnInit() {
    this.getBands();
  }

}
