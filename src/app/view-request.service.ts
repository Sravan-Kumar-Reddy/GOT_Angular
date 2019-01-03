import { Injectable } from '@angular/core';
//importing the http client
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import observables and related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
	providedIn: 'root'
})
export class ViewRequestService {
	public allCharacters;
	public allHouses;
	public allBooks;
	//public currentObject;
	public baseUrl = 'https://anapioficeandfire.com/api';
	constructor(private _http: HttpClient) { }

	//Function to get all characters from the API
	public getAllCharacters(): any {
		let allCharacters = this._http.get(this.baseUrl + '/characters');
		//console.log(myCharacters);
		//console.log(allCharacters);
		return allCharacters;

	}
	//Function to get all Houses from the API
	public getAllHouses(): any {
		let allHouses = this._http.get(this.baseUrl + '/houses');
		//console.log(myResponse);
		return allHouses;

	}
	//Function to get all Books from the API
	public getAllBooks(): any {
		let allBooks = this._http.get(this.baseUrl + '/books');
		//console.log(myResponse);
		return allBooks;

	}

	
}