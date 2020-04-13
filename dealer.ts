import { Card } from "./Card";


export class Dealer {

    constructor(
        private name: string,
        private _cards?: Card[],
        private _score?: number) {
        this._cards = []
        this._score = 0
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

    // דילר לוקח קלף ראשון
    dealerGetFirstCard(card: Card) {
        this._cards?.push(card)

        this.canculateScore()
    }

    // דילר ממשיך לקחת קלפים עד סכום 17
    async dealerGetCards(card: Card) {
        this._cards?.push(card)

        await this.canculateScore()
    }

    // איפוס
    resetDealerInfo() {
        this._cards = []
        this._score = 0
    }


    get cards() {
        return this._cards
    }


    get score() {
        return this._score
    }

    set scoreSet(val: number) {
        this._score = val
    }


}



