import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elevator = new FormGroup({
    left    : new FormControl('0'),
    right   : new FormControl('0'),
    call    : new FormControl('0'),
  });

  elevator_call:any

  onSubmit(){
    console.log(this.elevator.value)

    let left        = this.elevator.value.left
    let right       = this.elevator.value.right
    let call        = this.elevator.value.call
    let call_left   = Math.abs(call - left)
    let call_right  = Math.abs(call - right)

    if (call_left == call_right) {
      this.elevator_call    = 'Call Elevator Right'
    } else {
      if (call_left > call_right) {
        this.elevator_call  = 'Call Elevator Right'
      } else {
        this.elevator_call  = 'Call Elevator Left'
      }
    }

    // console.log('call_left ' + call_left)
    // console.log('call_right ' + call_right)
    // console.log('Call Elevator ' + right)
  }

}
