import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-app-header-true',
  templateUrl: './app-header-true.component.html',
  styleUrls: ['./app-header-true.component.css']
})
export class AppHeaderTrueComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  setIsShow(isShow: boolean) {
    this.isShow = isShow;
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
