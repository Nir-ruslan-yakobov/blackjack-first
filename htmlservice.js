export class HtmlService {
    static printCards(cards, elemet) {
        elemet.innerHTML = '';
        if (cards != null) {
            for (let i = 0; i < cards.length; i++) {
                let cardVal = cards[i].value;
                elemet.innerHTML += ` ${cardVal}`;
            }
        }
    }
    static printDeposid(deposid, elemet, elemetInput) {
        elemet.innerHTML = `Count: ${deposid}$`;
        if (elemetInput) {
            elemetInput.value = '';
        }
    }
    static clearBoards(pElement, dElement) {
        pElement.innerHTML = '';
        dElement.innerHTML = '';
    }
}
