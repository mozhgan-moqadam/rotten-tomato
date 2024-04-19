import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
  forAll: any = [
    {
      "name": "Shawshank",
      "rating": 5
    },
    {
      "name": "The Godfather",
      "rating": 5
    },
    {
      "name": "The Dark Knight",
      "rating": 4.5
    },
    {
      "name": "Schindler's List",
      "rating": 5
    },
    {
      "name": "Pulp Fiction",
      "rating": 4.5
    },
    {
      "name": "The Lord of the Rings",
      "rating": 4.5
    },
    {
      "name": "Forrest Gump",
      "rating": 4.5
    },
  ];

  trendingMovies: any = [
    {
      "id": 1,
      "name": "Oppenheimer",
      "cover": "https://resizing.flixster.com/5bbfOrn5Stku1HxlkK4ISYi2uQk=/206x305/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=",
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Me before you",
      "cover": "https://resizing.flixster.com/5EalkVscn2OBG9K0zy-gmLf83pI=/206x305/v2/https://resizing.flixster.com/2JDi6Ckf2g6lNLrSPA3GschBugI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0YjY1NDliLWNhNTMtNDQwYS04OThmLWM5NmFiMzI4YjBmNy53ZWJw",
      "rating": 3.75
    },
    {
      "id": 3,
      "name": "The choice",
      "cover": "https://resizing.flixster.com/VuEiYfxFTLbA5KsxaaFfB1C-DWE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12017653_p_v8_aa.jpg",
      "rating": 3.5
    },
    {
      "id": 4,
      "name": "Interstellar",
      "cover": "https://resizing.flixster.com/ook47iyCU5kwfHqSrDMespuKguA=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v12_ar.jpg",
      "rating": 5
    },
    {
      "id": 5,
      "name": "Under the bridge",
      "cover": "https://resizing.flixster.com/mNTHtg2mIzSnHX2nyG2p4f4SGvc=/206x305/v2/https://resizing.flixster.com/GRSp4zJ8RKhsHt9Bl4GHLS_6q5I=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZjI0NGIzMDEtZTM3ZC00Yjg5LWE5N2UtN2JhZmNhY2U0MWMxLmpwZw==",
      "rating": 2.5
    },
  ];

  animations: any = [
    {
      "name": "Shrek",
      "cover": "https://resizing.flixster.com/csCZjg2IuGoaqR4fugo-LrNgBEk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23961510_p_v13_aa.jpg",
      "rating": 4.5
    },
    {
      "name": "Migration",
      "cover": "https://resizing.flixster.com/8F6mQ51qaPQHm1UvOBjMV-2VaGQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24497638_p_v8_af.jpg",
      "rating": 4
    },
    {
      "name": "Toy Story",
      "cover": "https://resizing.flixster.com/Q_eOheUnRt1L271Ow8RG-jNDqOk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17420_p_v12_bc.jpg",
      "rating": 4.5
    },
    {
      "name": "Kung fu panda3",
      "cover": "https://resizing.flixster.com/sYsFIIzR_VIsc6nebLWB1M_oYNo=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/64718/64718_aa.jpg",
      "rating": 5
    },
  ]

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getAnimations();
    this.forAll();
  }

  getTrendingMovies() {
    this.http.get('https://ng-complete-guide-944ca-default-rtdb.firebaseio.com/trendingMovies.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getAnimations() {
    this.http.get('https://ng-complete-guide-944ca-default-rtdb.firebaseio.com/animations.json').subscribe((animations) => {
      this.animations = animations;
      console.log(this.animations);
    });
  }
  getForAll() {
    this.http.get('https://ng-complete-guide-944ca-default-rtdb.firebaseio.com/animations.json').subscribe((forAll) => {
      this.animations = forAll;
      console.log(this.forAll);
    });
  }

  goToMovie(type:string, id:string){
this.router.navigate(['movie',id,type])
  }
}
