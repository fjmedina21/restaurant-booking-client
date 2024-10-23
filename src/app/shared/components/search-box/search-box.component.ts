import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onDebounceValue = new EventEmitter<string>();

  @Output()
  public onEnterPressValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe(term => {
        this.onDebounceValue.emit(term);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onEnterPress(term: string) {
    this.onEnterPressValue.emit(term);
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }
}
