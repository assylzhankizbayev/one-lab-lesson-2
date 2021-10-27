import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('mike', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl(null, Validators.email)
  });

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log('users', response);
    })
  }

  login() {
    this.userService.addUsers(this.form.value)
      .subscribe(
        next => {
          console.log('add user', next);
        },
        err => console.log(err),
        () => console.log('login complete')
      )
  }
}
