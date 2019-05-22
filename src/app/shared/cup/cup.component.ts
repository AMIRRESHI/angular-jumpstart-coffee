import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
