import { Component, OnInit } from '@angular/core';
import { Menu } from '../Model/menu';
import { MenuService } from '../Service/menu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
menu: Menu = {};
constructor(private menuService: MenuService, private http: HttpClient){}

ngOnInit(): void {
  this.menuService.getMenu().subscribe(
    (data: Menu[]) => {
      if (data && data.length > 0) {
        this.menu = data[0];
        console.log(this.menu);
      }
    },
    (error) => {
      console.error(error);
    }
  );
}
logout() {
  this.http.post('http://localhost:8080/api/logout', {}).subscribe(() => {
    window.location.href = '/login';
  });
}
}
