import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check = new FormGroup({
    check_num    : new FormControl('')
  });

  elevator_call:any

  onSubmit(){
    let value = this.check.value.check_num;
    let value_check = [];
    // console.log(value[1])
    for (let i = 0; i < value.length; i++) {
      if ( i == 0 ) {
        value_check.push(value[0])
      } else {
        if (value[i] != value[i-1]) {
          value_check.push(value[i])
        }    
      }
    }

    console.log(value_check)
    this.elevator_call = 'uniqueInOrder is ' + value_check.toString()

  }

}
