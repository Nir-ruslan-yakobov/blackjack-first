import { Player } from "./player.js";
import { Deck } from "./deck.js";
import { Dealer } from "./dealer.js";
import { Game } from "./game.js";
import { HtmlService } from "./htmlservice.js";
const deck = new Deck();
const suffeledDeck = deck.deck;
const game = new Game(new Dealer('Dealer'), new Player('Avi'), suffeledDeck);
console.log(game);
// הפקדת כסף
const setDeposid = document.querySelector('#setDeposid');
let countMoney = document.querySelector('#count');
setDeposid.addEventListener('click', () => {
    let deposidInput = document.querySelector('#deposid');
    game.player.playerDeposid(+deposidInput.value);
    if (game.player.deposid) {
        HtmlService.printDeposid(game.player.deposid, countMoney, deposidInput);
    }
});
// סכום הימור
const betting = document.querySelector('#betting');
let betValBoard = document.querySelector('#betval');
betting.addEventListener('click', () => {
    let betInput = document.querySelector('#bet');
    if (game.player.deposid != null) {
        if (game.player.deposid == 0) {
            alert('Deposid please');
            return;
        }
    }
    if (game.player.bet != null) {
        if (game.player.playerBet(+betInput.value)) {
            console.log('Bet set');
            HtmlService.printBet(+betInput.value, betValBoard, betInput);
        }
    }
});
// התחלה שחקן מקבל 2 קלפים והם מודפסים למסך ודילר מקבל קלף אחד ומודפס למסך
const start = document.querySelector('#start');
let playerBoard = document.querySelector('#activecards');
let dealerBoard = document.querySelector('#dealeractivecards');
start.addEventListener('click', () => {
    if (game.player.deposid != null) {
        if (game.player.deposid == 0) {
            alert('Deposid please');
            return;
        }
    }
    if (game.player.bet === 0) {
        alert('Place a bet ');
        return;
    }
    game.playerFirstCards();
    if (game.player.cards) {
        console.log('player first cards');
        HtmlService.printCards(game.player.cards, playerBoard);
    }
    game.dealerFirstCard();
    if (game.dealer.cards) {
        HtmlService.printCards(game.dealer.cards, dealerBoard);
    }
});
// שחקן לוקח קלף ומופדס ומסך
const playerHit = document.querySelector('#hit');
playerHit.addEventListener('click', () => {
    game.playerHit();
    if (game.player.cards) {
        // let lastCard = game.player.cards[game.player.cards?.length - 1]
        HtmlService.printCards(game.player.cards, playerBoard);
    }
    if (game.player.score === 0) {
        game.nextRound((reset) => {
            console.log(reset);
            if (reset && game.player.deposid) {
                HtmlService.clearBoards(playerBoard, dealerBoard, betValBoard);
                HtmlService.printDeposid(game.player.deposid, countMoney);
            }
        });
    }
});
// שחקן עומד דילר משחק וקלפי הדילר מודפסים למסך
const stay = document.querySelector('#stay');
stay.addEventListener('click', () => {
    game.dealerCards();
    if (game.dealer.cards) {
        HtmlService.printCards(game.dealer.cards, dealerBoard);
    }
    console.log(game.dealer.score, 'Score');
    console.log(game.player.deposid, 'Deposid');
    game.checkWinner();
    game.nextRound((reset) => {
        if (reset && game.player.deposid != null) {
            console.log(reset);
            HtmlService.clearBoards(playerBoard, dealerBoard, betValBoard);
            HtmlService.printDeposid(game.player.deposid, countMoney);
        }
    });
});
