import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {}
  navigate(route: string) {
    this._router.navigate(['/dashboard/' + route]).then(() => {});
  }

  ngAfterViewInit() {
    // if (typeof particlesJS !== 'undefined') {
    //   this.initializeParticles();
    // } else {
    //   console.error(
    //     'Particle.js not defined. Make sure it is properly loaded.'
    //   );
    // }
  }

  // private initializeParticles() {
  //   particlesJS('particles-js', {
  //     particles: {
  //       number: {
  //         value: 100,
  //       },
  //       color: {
  //         value: '#00b6ff',
  //       },
  //       shape: {
  //         type: 'circle',
  //       },
  //       opacity: {
  //         value: 0.9,
  //         random: true,
  //       },
  //       size: {
  //         value: 7,
  //         random: true,
  //       },
  //       line_linked: {
  //         enable: true,
  //         distance: 150,
  //         color: '#00ffec',
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //     },
  //   });
  // }
}
