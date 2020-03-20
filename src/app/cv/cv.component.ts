import { Component, OnInit } from '@angular/core';
import { CvData } from '../data/cv';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  skills = [
    {
      type: "Frontend",
      list: ["JavaScript","CSS/CSS3","HTML/HTML5","jQuery","React","Vue"]
    },
    {
      type: "Backend",
      list: ["PHP","Python","Java"]
    },
    {
      type: "Tools",
      list: ["Git","Grunt"]
    },
    {
      type: "Databases",
      list: ["MySQL"]
    },
    {
      type: "Platforms",
      list: ["Magento 1"]
    },


  ];

  education = [
    {
      schoolName: "University of California, Los Angeles",
      startDate: 2008,
      endDate: 2013,
      degree: "Bachelors of Science, Mathematics of Computation"
    }
  ];
  cv_data  = CvData;
  title = "Resume";
  constructor() { }

  ngOnInit() {
  }

}
