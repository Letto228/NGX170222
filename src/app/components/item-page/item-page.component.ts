import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-classwork-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
