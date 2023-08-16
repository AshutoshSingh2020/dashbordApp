import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authguard/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentYear: any = new Date().getFullYear()

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    public toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
      this.roles = this.storageService.getUser().roles;
    }
  }

  loginHandler(): void {
    const { username, password } = this.loginForm;
    this.spinner.show();
    this.authService.login(username, password).subscribe({
      next: data => {
        this.spinner.hide();
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
        this.toastr.success('Login Successfully!', 'Success!');
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.spinner.hide()
        this.errorMessage = err.error.message;
        this.toastr.error('Login failed!', this.errorMessage);
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
