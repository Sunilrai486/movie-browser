import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryTerm: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(event: Event) {
    event.preventDefault();

    this.router.navigate(['/movies'], { queryParams: { search: this.queryTerm } });
  }
}
