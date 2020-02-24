import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { EventEmitter } from '@angular/core';


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

  @Output() values: EventEmitter<any> = new EventEmitter();

  _isSelectable = true;
  _doAddOnBlur = true;
  _isRemovable = true;
  _separators = [ENTER, COMMA];
  _placeholder;
  _items;
  _selectedItems: any[] = [];
  itemCtrl = new FormControl();
  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() { }

  ngOnInit(): void {
  }

  remove(item) {
    const index = this._selectedItems.indexOf(item);

    if (index >= 0) {
      this._selectedItems.splice(index, 1)
    }
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this._selectedItems.push(event.option.value);
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    //Add item
    if ((value || '').trim()) {
      this._selectedItems.push(value);
    }

    //Reset input value
    if (input) {
      input.value = '';
    }
    console.log(this._selectedItems)
    this.values.emit(this._selectedItems);
  }

}
