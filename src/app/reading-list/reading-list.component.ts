import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})

export class ReadingListComponent implements OnInit {

  reading_list = [
   {name: "The Google Resume",completed: true,date: "January 2019"},
   {name: "Agile project management with Kanban",completed: true,date: "February 2019"},
   {name: "The lean startup", completed: true, date:"February 2019"},
   {name: "21 Lessons for the 21st century", completed: true, date: "March 2019"},
   {name: "Deep work", completed: false}
   ];

  constructor() { }

  ngOnInit() {
  }

}
