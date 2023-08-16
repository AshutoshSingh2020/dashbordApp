import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authguard/auth.service';
import { EventBusService } from 'src/app/services/eventShared/event.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;
  styles: any;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.styles = {
      'background-color': 'red',
      'color': 'white',
      'font-size': '28px',
      'border-radius': '50%',
      'height': '40px',
      'width': '40px',
      'margin-top': '0px'

    };

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }
  isShowDiv = false;  
     
  toggleDisplayDivIf() {  
    this.isShowDiv = !this.isShowDiv;  
  } 
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['/login']);
        this.toastr.success('Logout Successfully!', 'Success!');
      },
      error: (error: any) => {
        this.toastr.error('Logout failed!', error);
        console.log(error);
      }
    });
  }

  menuBtnChange(): void {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const closeBtn = document.querySelector("#btn") as HTMLElement;
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  
  menuBtn() {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    sidebar.classList.toggle("open");
    this.menuBtnChange();
  }
}
