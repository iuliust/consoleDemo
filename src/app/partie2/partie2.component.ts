import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsr-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.scss']
})
export class Partie2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blackboxDemo() {
    console.log('blackboxDemo');
  }

  experimentalFatArrowBreakpoint(name) {
    setTimeout(() => {console.log('you can even stop while inside a fat arrow function');}, 1000);
  }

}
