import { Card } from "./Card";

export class HtmlService {

    static printCards(cards: Card[], elemet: HTMLElement) {
        elemet.innerHTML = ''
        if (cards != null) {
            for (let i: number = 0; i < cards.length; i++) {
                let cardVal = cards[i].value
                elemet.innerHTML += ` ${cardVal}`
            }
        }
    }


    static printDeposid(deposid: number, elemet: HTMLElement, elemetInput?: HTMLInputElement) {
        elemet.innerHTML = `Count: ${deposid}$`

        if (elemetInput) {
            elemetInput.value = ''
        }
    }


    static clearBoards(pElement: HTMLElement, dElement: HTMLElement) {
        pElement.innerHTML = ''
        dElement.innerHTML = ''
    }


}