import { Component, OnInit, Input } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {

@Input() marginTop = "-120px";

  constructor() { }

  ngOnInit() {
  }

  getHint(){
 this.marginTop = "0"
    setTimeout(() => {
      this.setHint();
    }, 2000);
    }

  setHint(){
  this.marginTop = ""
  }

}
