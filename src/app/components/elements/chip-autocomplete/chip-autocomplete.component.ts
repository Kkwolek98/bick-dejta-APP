import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chip-autocomplete',
  templateUrl: './chip-autocomplete.component.html',
  styleUrls: ['./chip-autocomplete.component.scss']
})
export class ChipAutocompleteComponent implements OnInit {

  @Input('items') set items(value) {
    this._items = value;
  }
  @Input('placeholder') set placeholder(value) {
    this._placeholder = value;
  }

  _isSelectable = true;
  _doAddOnBlur = true;
  _isRemovable = true;
  _separators = [ENTER, COMMA];
  _placeholder;
  _items;


  constructor() { }

  ngOnInit(): void {
  }

  remove(item) {

  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    //Add item
    if ((value || '').trim()) {
      this._items.push({ name: value.trim() });
    }

    //Reset input value
    if (input) {
      input.value = '';
    }
  }

}
