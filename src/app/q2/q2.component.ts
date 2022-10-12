import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check = new FormGroup({
    check_num    : new FormControl('')
  });

  elevator_call:any

  onSubmit(){
    let value = this.check.value.check_num.split(" ");
    console.log(this.check.value.check_num)
    console.log(value)
    console.log('MIN = ' + Math.min(...value))
    console.log('MAX = ' + Math.max(...value))
    this.elevator_call = 'MIN = ' + Math.min(...value) + ' AND ' + 'MAX = ' + Math.max(...value)
  }

}
