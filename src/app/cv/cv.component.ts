import { Component, OnInit } from '@angular/core';
import { CvData } from '../data/cv';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cv_data  = CvData;
  title = "Resume";
  constructor() { }

  ngOnInit() {
  }

}
