import { Component, OnInit } from '@angular/core';
//Importing route related code to collect the url query-string
import { ActivatedRoute, Router } from '@angular/router';

//importing Services
import { ViewService } from '../view.service';
import { ViewRequestService } from '../view-request.service';

//importing Location
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css'],
  providers:[Location]
  //preserveWhitespaces: true
})
export class ViewOneComponent implements OnInit {
  public currentObject;
  public allCharacters;
  public allHouses;
  public allBooks;

  constructor(private _route: ActivatedRoute, private router: Router,private viewRequestService: ViewRequestService,private location:Location) { }

  ngOnInit() {
    this.currentObject = this._route.snapshot.paramMap.get('name');

    this.allCharacters = this.viewRequestService.getAllCharacters().subscribe(//Subscribe for 'observables'(for fetching the data)
      data => {
        //console.log(typeof(data));
        this.allCharacters = data;
        console.log("All Characters"+ this.allCharacters);

        for (let i = 0; i < this.allCharacters.length; i++) {
          if (this.currentObject == this.allCharacters[i].url) {
            this.currentObject = this.allCharacters[i];
          }
        }
          console.log(this.currentObject);


      },
      error => {
        console.log(error.errorMessage);
      }
    );
    this.allHouses = this.viewRequestService.getAllHouses().subscribe(//Subscribe for 'observables'(for fetching the data)
      data => {
        //console.log(data);
        this.allHouses = data;
        //console.log("All Houses:"+this.allHouses);

        for (let i = 0; i < this.allHouses.length; i++) {
          if (this.currentObject == this.allHouses[i].url) {
            this.currentObject = this.allHouses[i];
          }
        }
      },
      error => {
        console.log(error.errorMessage);
      }
    );
    this.allBooks = this.viewRequestService.getAllBooks().subscribe(//Subscribe for 'observables'(for fetching the data)
      data => {
        //console.log(data);
        this.allBooks = data;
        //console.log("All Books:"+this.allBooks);
        for (let i = 0; i < this.allBooks.length; i++) {
          if (this.currentObject == this.allBooks[i].url) {
            this.currentObject = this.allBooks[i];
          }
        }
      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }
    goBackToPreviousPage(): any {

    this.location.back();

  }
}
