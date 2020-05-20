import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/tabs'
    },
    {
      title: 'Profile',
      url: '/menu/profile'
    },
    {
      title: 'Referral',
      url: '/menu/referral'
    },
    {
      title: 'Get Free',
      url: '/menu/free'
    },
    {
      title: 'About us',
      url: '/menu/about'
    }
  ];

  selectedPath = '';

  constructor(private router: Router, private menu: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

}
