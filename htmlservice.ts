import { Card } from "./Card";

export class HtmlService {

    // הדפסת קלפים למסך
    static printCards(cards: Card[], elemet: HTMLElement) {
        elemet.innerHTML = ''
        if (cards != null) {
            for (let i: number = 0; i < cards.length; i++) {
                let cardVal = cards[i].value
                elemet.innerHTML += ` ${cardVal}`
            }
        }
    }

    // הספדת הפקדה למסך
    static printDeposid(deposid: number, elemet: HTMLElement, elemetInput?: HTMLInputElement) {
        elemet.innerHTML = `Count: ${deposid}$`

        if (elemetInput) {
            elemetInput.value = ''
        }
    }

    // נקיון שולחן
    static clearBoards(pElement: HTMLElement, dElement: HTMLElement, bElemet: HTMLElement) {
        pElement.innerHTML = ''
        dElement.innerHTML = ''
        bElemet.innerHTML = ''
    }

    // הדפסת הימור על המסך
    static printBet(betVal: number, elemet: HTMLElement, elemetInput: HTMLInputElement) {
        elemet.innerHTML = ` Bet:  /${betVal}`
        elemetInput.value = ''
    }





}