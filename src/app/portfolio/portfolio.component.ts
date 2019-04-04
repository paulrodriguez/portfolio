import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  content = [
    {
      title: "Next Level Apparel",
      description: "B2B E-Commerce Apparel website built with Magento 1, currently porting to Magento 2",
      link: "https://www.nextlevelapparel.com"},
    {
      title: "Tadashi Shoji",
      description: "B2C E-Commerce Fashion website built with Magento 1",
      link: "https://www.tadashishoji.com"},
    {
      title: "FeedMi",
      description: `Restaurant locator for the city of Milan in Italy.
      Restaurants can be searched by cuisines, price, transportation, and much more.
      Restaurant owners can manage their restaurant to change menu items, pricing, etc.`,
      link: "http://feedmi.it"
    },
    {
      title: "Metro Apartments NYC",
      description: `Real estate listing website that allows searching for apartments in the NYC area.
      Backend functionality allows for agents to manage their listings.`,
      link: "http://www.metroaptnyc.com"
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
