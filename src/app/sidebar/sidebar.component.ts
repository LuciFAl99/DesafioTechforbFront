import { Component, OnInit } from '@angular/core';
import { Menu } from '../Model/menu';
import { MenuService } from '../Service/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
menu: Menu = {};
constructor(private menuService: MenuService){}

ngOnInit(): void {
  this.menuService.getMenu().subscribe(
    (data: Menu[]) => {
      if (data && data.length > 0) {
        this.menu = data[0]; // Accede al primer objeto del array
        console.log(this.menu);
      }
    },
    (error) => {
      console.error(error);
    }
  );

}
}
