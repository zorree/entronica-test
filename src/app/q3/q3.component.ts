import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  randomcard: string = ''
  showcard: any
  score: any

  card = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  cardscore = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10']

  constructor() { }

  ngOnInit(): void {
    // console.log(this.randomcard.length)
  }

  _randomcard() {

    if (this.randomcard.length == 0) {
      this.randomcard = this.card[Math.floor(Math.random() * this.card.length)]
    } else {
      this.randomcard = this.randomcard + ' ' + this.card[Math.floor(Math.random() * this.card.length)]
    }
    console.log(this.randomcard)
    // console.log(this.randomcard.length)

    this.showcard = 'MY CARD = ' + this.randomcard

    // console.log(this._score(this.randomcard))
    this.score = 'MY SCORE = ' + this._score(this.randomcard)

  }

  _clearcard() {
    this.randomcard = ''
    this.showcard = ''
    this.score = ''
  }

  _score(random: any) {
    let value = random.split(' ')
    let score_total = 0
    let check_A = []

    for (let i = 0; i < value.length; i++) {
      score_total = score_total + parseInt(this.cardscore[this.card.indexOf(value[i])])
    }

    if (score_total > 21) {
      check_A = value.filter((card: any) => card === 'A')
      score_total = score_total - (11 * check_A.length) + (1 * check_A.length)
    }

    return score_total
  }

}
