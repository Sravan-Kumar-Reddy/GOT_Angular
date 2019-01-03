import { Component, OnInit } from '@angular/core';
//service import
import { ViewService } from '../view.service';
import { ViewRequestService } from '../view-request.service'

@Component({
	selector: 'app-view-all',
	templateUrl: './view-all.component.html',
	styleUrls: ['./view-all.component.css'],
	providers: [Location]
	//preserveWhitespaces: true
})
export class ViewAllComponent implements OnInit {
	public allCharacters;
	public allHouses;
	public allBooks;


	constructor(private viewRequestService: ViewRequestService) { }

	ngOnInit() {
		this.allCharacters = this.viewRequestService.getAllCharacters().subscribe(//Subscribe for 'observables'(for fetching the data)
			data => {
				//console.log(typeof(data));
				this.allCharacters = data;
				//console.log("All Characters"+ this.allCharacters);
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
			},
			error => {
				console.log(error.errorMessage);
			}
		);
	}

}
