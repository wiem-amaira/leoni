import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APP_ROUTING} from "../../../../core/config/route/APP_ROUTING";

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any;
  public isCollapsed = true;

  connectedUser: any;
  user: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      {
        path: APP_ROUTING.PRIVATE.DASHBOARD,
        title: "Dashboard",
        type: "link",
        icontype: "ni-shop text-primary",
      },
      {
        path: APP_ROUTING.PRIVATE.PRODUCTS,
        title: "Gestion des produits",
        type: "link",
        icontype: "fas fa-coffee text-danger",
      },
      {
        path: APP_ROUTING.PRIVATE.ORDERS,
        title: "Gestion des commandes",
        type: "link",
        icontype: "fas fa-shopping-bag text-default",
      },
      {
        path: APP_ROUTING.PRIVATE.CLAIMS,
        title: "Gestion des réclamations",
        type: "link",
        icontype: "fas fa-user-times text-success",
      },
    ]
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
    //this.getUser();
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
