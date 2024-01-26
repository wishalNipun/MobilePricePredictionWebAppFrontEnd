import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(
    private _router :Router,
  ) { }
  ngOnInit(): void {}
  navigate(route: string) {
    this._router.navigate(['/dashboard/' + route]).then(() =>{ });
  }
}
