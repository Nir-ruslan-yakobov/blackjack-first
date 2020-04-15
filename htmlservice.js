export class HtmlService {
    // הדפסת קלפים למסך
    static printCards(cards, elemet) {
        elemet.innerHTML = '';
        if (cards != null) {
            for (let i = 0; i < cards.length; i++) {
                let cardVal = cards[i].value;
                elemet.innerHTML += ` ${cardVal}`;
            }
        }
    }
    // הספדת הפקדה למסך
    static printDeposid(deposid, elemet, elemetInput) {
        elemet.innerHTML = `Count: ${deposid}$`;
        if (elemetInput) {
            elemetInput.value = '';
        }
    }
    // נקיון שולחן
    static clearBoards(pElement, dElement, bElemet) {
        pElement.innerHTML = '';
        dElement.innerHTML = '';
        bElemet.innerHTML = '';
    }
    // הדפסת הימור על המסך
    static printBet(betVal, elemet, elemetInput) {
        elemet.innerHTML = ` Bet:  /${betVal}`;
        elemetInput.value = '';
    }
}
