var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Dealer {
    constructor(name, _cards, _score) {
        this.name = name;
        this._cards = _cards;
        this._score = _score;
        this._cards = [];
        this._score = 0;
    }
    // חישוב סכום הקלפים
    canculateScore() {
        var _a;
        let ace = 0;
        let sum = 0;
        if (this._score != null && this._cards != null) {
            for (let i = 0; i < ((_a = this._cards) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (this._cards[i].value === 11) {
                    ace++;
                }
                sum += this._cards[i].value;
            }
            for (let i = 0; i < ace; i++) {
                if (sum > 21) {
                    sum -= 10;
                }
            }
            this._score = sum;
        }
    }
    // דילר לוקח קלף ראשון
    dealerGetFirstCard(card) {
        var _a;
        (_a = this._cards) === null || _a === void 0 ? void 0 : _a.push(card);
        this.canculateScore();
    }
    // דילר ממשיך לקחת קלפים עד סכום 17
    dealerGetCards(card) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this._cards) === null || _a === void 0 ? void 0 : _a.push(card);
            yield this.canculateScore();
        });
    }
    // איפוס
    resetDealerInfo() {
        this._cards = [];
        this._score = 0;
    }
    get cards() {
        return this._cards;
    }
    get score() {
        return this._score;
    }
    set scoreSet(val) {
        this._score = val;
    }
}
