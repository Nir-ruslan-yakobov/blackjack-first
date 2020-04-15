import { Card } from "./Card";


export class Player {

    constructor(
        private name: string,
        private _cards?: Card[],
        private _deposid?: number,
        private _score?: number,
        private _bet?: number) {
        this._cards = []
        this._score = 0
        this._deposid = 0
        this._bet = 0
    }

    // שחקן מקבל 2 קלפים ראשונים
    playerGetFirstCards(card: Card): void {
        this._cards?.push(card)

        this.canculateScore()
    }


    // חישוב סכום הקלפים
    canculateScore(): void {
        let ace: number = 0
        let sum: number = 0
        if (this._score != null && this._cards != null) {
            for (let i: number = 0; i < this._cards?.length; i++) {
                if (this._cards[i].value === 11) {
                    ace++
                }
                sum += this._cards[i].value
            }

            for (let i = 0; i < ace; i++) {
                if (sum > 21) {
                    sum -= 10
                }
            }

            this._score = sum
        }
    }

    // שחקן לוקח קלף
    async playerHitCard(card: Card) {
        this._cards?.push(card)

        await this.canculateScore()
    }

    // שחקן מפקיד כסף
    playerDeposid(count: number): void {
        if (this._deposid != null) {
            this._deposid += count
        }
    }

    //שחקן מהמר
    playerBet(betVal: number) {
        console.log(betVal)
        if (this.deposid != null) {
            if (betVal > this.deposid) {
                alert('Not enoght plaese deposid')
                return false
            }

        }

        this._bet = betVal
        return true
    }

    // איפוס
    resetPlayerInfo(): void {
        this._cards = []
        this._score = 0
        this._bet = 0
    }

    // עידכון תקציב
    upDateCountMoney(win: boolean) {
        if (this._bet != null && this._deposid != null) {
            if (win) {
                this._deposid += this._bet
            } else {
                this._deposid -= this._bet
            }
        }
    }


    get deposid() {
        return this._deposid
    }


    get cards() {
        return this._cards
    }


    get score() {
        return this._score
    }


    get bet() {
        return this._bet
    }


    set scoreSet(val: number) {
        this._score = val
    }

}