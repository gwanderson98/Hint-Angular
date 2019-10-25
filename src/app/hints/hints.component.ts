import { Component, OnInit, Input } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {

// @Input() display="none";
@Input() marginTop = "-120px";

  constructor() { }

  ngOnInit() {
  }

  getHint(){
 //   this.display="block";
 this.marginTop = "0"
    setTimeout(() => {
      this.setHint();
    }, 2000);
    }

  setHint(){
  //  this.display="none";
  this.marginTop = ""
  }

}
