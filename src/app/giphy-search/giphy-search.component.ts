import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable, Subject, pipe} from 'rxjs';
import {
  delay,
  debounceTime,
  catchError,
  map,
  takeWhile,
  tap,
  distinctUntilChanged,
  switchMap,
  flatMap,
  mergeMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent implements OnInit {
  giphyForm: FormGroup;
  results;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  giphyObserve() {
    this.giphyForm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
      ).subscribe( data => this.results = data);
  }

  private createForm(): void {
    this.formBuilder.group({
      search: this.formBuilder.group
    });
  }

}
