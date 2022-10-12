import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css']
})
export class Q6Component implements OnInit {

  randomcard: string = ''
  showcard: any
  score: any

  numplayer: any

  player: any
  winner: any

  card = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  cardscore = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10']
  // cardscore = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']

  constructor() { }

  ngOnInit(): void {
    // console.log(this.randomcard.length)
  }

  _addplayer() {

    this.winner = ''

    let customObj = []
    console.log(this.numplayer)

    for (let i = 0; i < this.numplayer; i++) {
      customObj.push({ id: i, player: i + 1, card: "", score: "", status: "" })
    }

    console.log(customObj)
    this.player = customObj
  }

  _randomcard(num: any) {

    console.log(num)

    if (this.player[num]['card'].length == 0) {
      this.player[num]['card'] = this.card[Math.floor(Math.random() * this.card.length)]
    } else {
      this.player[num]['card'] = this.player[num]['card'] + ' ' + this.card[Math.floor(Math.random() * this.card.length)]
    }
    console.log(this.player)

    this.player[num]['score'] = this._score(this.player[num]['card'])

    if (this.player[num]['score'] > 21) {
      this.player[num]['status'] = 'disqualified'
    }

    this.winner = this._checkwinner().map((x: any) => x['player']).toString()

    console.log(this.winner)

  }

  _clearcard() {
    this.randomcard = ''
    this.showcard = ''
    this.score = ''
    this.player = []
    this.winner = ''
  }

  _score(random: any) {
    let value = random.split(' ')
    let score_total = 0
    let check_A

    for (let i = 0; i < value.length; i++) {
      score_total = score_total + parseInt(this.cardscore[this.card.indexOf(value[i])])
    }

    if (score_total > 21) {
      check_A = value.filter((card: any) => card === 'A')
      score_total = score_total - (11 * check_A.length) + (1 * check_A.length)
    }

    return score_total
  }

  _checkwinner() {
    let score = []
    let check
    let maxscore = 0
    let winner
    for (let i = 0; i < this.player.length; i++) {
      score.push(this.player[i]['score'])
    }

    check = score.filter((scorecheck: any) => scorecheck > 0 && scorecheck <= 21)

    maxscore = Math.max(...check)

    if (maxscore != -Infinity) {
      winner = this.player.filter((card: any) => card['score'] === maxscore)
    } else {
      winner = [{ player: 'NO PLAYER WIN' }]
    }

    return winner
  }

}
