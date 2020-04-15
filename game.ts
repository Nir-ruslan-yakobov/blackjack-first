import { Dealer } from "./dealer";
import { Player } from "./player";
import { Card } from "./Card";
import { HtmlService } from "./htmlservice";


export class Game {


    constructor(public dealer: Dealer, public player: Player, public deck: Card[]) { }

    // הגרלת קלף מהחבילה והשמטתו מהחבילה
    randomCard(): Card {
        let card = Math.floor(Math.random() * this.deck.length)

        // console.log(this.deck.splice(card, 1))

        return this.deck[card]
    }

    // קלף ראשון של הדילר
    dealerFirstCard(): void {
        let rndCard = this.randomCard()

        this.dealer.dealerGetFirstCard(rndCard)

    }

    // שאר קלפי הדילר אחרי שהשחקן החליט לעמוד
    dealerCards() {
        if (this.dealer.score) {
            while (this.dealer.score < 17) {
                let rndCard = this.randomCard()

                this.dealer.dealerGetCards(rndCard)

                if (this.checkScore(this.dealer.score, 'Dealer')) {
                    this.dealer.scoreSet = 0
                    break
                }
            }
        }
    }

    // שחקן  2 קלפים ראשונים
    playerFirstCards(): void {
        for (let i: number = 0; i < 2; i++) {
            let rndCard = this.randomCard()

            this.player.playerGetFirstCards(rndCard)
        }

        if (this.player.score)
            this.checkScore(this.player.score, 'Player')
    }

    // שחקן לקח קלף
    playerHit(): void {
        let rndCard = this.randomCard()

        this.player.playerHitCard(rndCard)

        if (this.player.score)
            if (this.checkScore(this.player.score, 'Player')) {
                this.player.scoreSet = 0
                this.player.upDateCountMoney(false)
                return
            }
    }

    // 5 שניות הפסקה לסיבוב הבא
    nextRound(callBack: Function): void {
        let counter = 0
        let time = setInterval(() => {
            counter++
            if (counter === 5) {
                this.player.resetPlayerInfo()
                this.dealer.resetDealerInfo()
                clearInterval(time)
                callBack(true)
            }
        }, 1000);

    }


    // בדיקת נקודות 
    checkScore(score: number, kind: string) {
        console.log(score)
        if (score != null) {
            if (score === 21) {
                console.log(`21 Black jack for ${kind}`)
                return
            }
            if (score > 21) {
                console.log(`${kind} bust`)
                return true
                // callReset()
            }
        }
    }


    // בדיקת מנצח
    checkWinner() {
        if (this.dealer.score != null && this.player.score != null) {
            if (this.dealer.score > this.player.score && this.dealer.score <= 21) {
                console.log('Dealer win')
                this.player.upDateCountMoney(false)
            }
            else if (this.dealer.score < this.player.score && this.player.score <= 21) {
                console.log('Player win')
                this.player.upDateCountMoney(true)
            } else {
                console.log('Split')
            }
        }
    }

}

