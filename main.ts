import { Card } from "./Card.js";
import { Player } from "./player.js";
import { Deck } from "./deck.js";
import { Dealer } from "./dealer.js";
import { Game } from "./game.js";
import { HtmlService } from "./htmlservice.js";


const deck: Deck = new Deck()
const suffeledDeck = deck.deck



const game: Game = new Game(new Dealer('Dealer'), new Player('Avi'), suffeledDeck)
console.log(game)




// הפקדת כסף
const setDeposid = document.querySelector('#setDeposid') as HTMLButtonElement
let countMoney = document.querySelector('#count') as HTMLElement
setDeposid.addEventListener('click', () => {
    let deposidInput = document.querySelector('#deposid') as HTMLInputElement

    game.player.playerDeposid(+deposidInput.value)
    if (game.player.deposid) {
        HtmlService.printDeposid(game.player.deposid, countMoney, deposidInput)
    }
})


// סכום הימור
let betInput = document.querySelector('#bet') as HTMLInputElement
let betVal = document.querySelector('#betval') as HTMLElement
const betting = document.querySelector('#betting') as HTMLButtonElement
betting.addEventListener('click', () => {
    if (game.player.deposid == 0) {
        alert('Deposid please')
        return
    }

    if (game.player.bet != null) {
        if (game.player.playerBet(+betInput.value)) {
            betVal.innerHTML = ` Bet:  /${+betInput.value}`
            betInput.value = ''
        }
    }

})





// התחלה שחקן מקבל 2 קלפים והם מודפסים למסך ודילר מקבל קלף אחד ומודפס למסך
const start = document.querySelector('#start') as HTMLButtonElement
let playerBoard = document.querySelector('#activecards') as HTMLElement
let dealerBoard = document.querySelector('#dealeractivecards') as HTMLElement
start.addEventListener('click', () => {
    if (game.player.deposid == 0) {
        alert('Deposid please')
        return
    }

    game.playerFirstCards()
    if (game.player.cards) {
        console.log('player first cards')
        HtmlService.printCards(game.player.cards, playerBoard)
    }


    game.dealerFirstCard()
    if (game.dealer.cards) {
        HtmlService.printCards(game.dealer.cards, dealerBoard)
    }

})


// שחקן לוקח קלף ומופדס ומסך
const playerHit = document.querySelector('#hit') as HTMLButtonElement
playerHit.addEventListener('click', () => {
    game.playerHit()
    if (game.player.cards) {
        // let lastCard = game.player.cards[game.player.cards?.length - 1]
        HtmlService.printCards(game.player.cards, playerBoard)
    }

    if (game.player.score === 0) {
        game.nextRound((reset: boolean) => {
            if (reset && game.player.deposid) {
                HtmlService.clearBoards(playerBoard, dealerBoard)
                HtmlService.printDeposid(game.player.deposid, countMoney)
            }
        })
    }
})





// שחקן עומד דילר משחק וקלפי הדילר מודפסים למסך
const stay = document.querySelector('#stay') as HTMLButtonElement
stay.addEventListener('click', () => {

    game.dealerCards()
    if (game.dealer.cards) {
        HtmlService.printCards(game.dealer.cards, dealerBoard)
    }

    console.log(game.dealer.score)


    game.checkWinner()

    game.nextRound((reset: boolean) => {
        if (reset && game.player.deposid) {
            HtmlService.clearBoards(playerBoard, dealerBoard)
            HtmlService.printDeposid(game.player.deposid, countMoney)

        }
    })


})


