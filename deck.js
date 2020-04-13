export class Deck {
    constructor() {
        this.deck = [];
        this.createDeck(1);
        if (this.deck.length > 0) {
            this.suffele();
        }
    }
    // יצירת חבילה
    createDeck(numberOfDeckes) {
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        const shapes = ['Heart', 'Club', 'Spade', 'Diamond'];
        for (let i = 0; i < numberOfDeckes; i++) {
            shapes.forEach((shape) => {
                numbers.forEach((number) => {
                    this.deck.push({ value: number, shape: shape });
                });
            });
        }
    }
    // עירבוב החבילה
    suffele() {
        let count = this.deck.length - 1;
        while (count > 0) {
            let index = Math.floor(Math.random() * this.deck.length);
            let temp = this.deck[index];
            this.deck[index] = this.deck[count];
            this.deck[count] = temp;
            count--;
        }
        return this.deck;
    }
}
