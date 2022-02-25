import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gamer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
constructor(private readonly formBuilder: FormBuilder, private router: Router) {}

ngOnInit(): void {
  this.form = this.formBuilder.group({
    search: [''],
  });
}
  search(){
    this.router.navigate(['items'], {queryParams: {search: this.form.get('search').value}});
  }
}
