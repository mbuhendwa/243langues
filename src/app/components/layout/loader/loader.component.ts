import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  lines: Array<number> = Array(16);

  constructor() { }

  ngOnInit(): void {
  }

}
