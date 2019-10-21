import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GiphyService } from '../gipy-service.service';
import {pipe} from 'rxjs';
import {
  debounceTime,
  tap,
  distinctUntilChanged,
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

  constructor(
    private giphyService: GiphyService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm();
    this.giphyObserve();
  }

  giphyObserve() {
    this.giphyForm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        mergeMap(term => this.giphyService.getResults(term)),
        tap(x => console.log('giphy results', x))
      ).subscribe( data => this.results = data);
  }

  private createForm(): void {
    this.giphyForm = this.formBuilder.group({
      term: ''
    });
  }

}
