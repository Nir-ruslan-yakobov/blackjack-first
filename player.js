var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Player {
    constructor(name, _cards, _deposid, _score, _bet) {
        this.name = name;
        this._cards = _cards;
        this._deposid = _deposid;
        this._score = _score;
        this._bet = _bet;
        this._cards = [];
        this._score = 0;
        this._deposid = 0;
        this._bet = 0;
    }
    // שחקן מקבל 2 קלפים ראשונים
    playerGetFirstCards(card) {
        var _a;
        (_a = this._cards) === null || _a === void 0 ? void 0 : _a.push(card);
        this.canculateScore();
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
    // שחקן לוקח קלף
    playerHitCard(card) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this._cards) === null || _a === void 0 ? void 0 : _a.push(card);
            yield this.canculateScore();
        });
    }
    // שחקן מפקיד כסף
    playerDeposid(count) {
        if (this._deposid != null) {
            this._deposid += count;
        }
    }
    //שחקן מהמר
    playerBet(betVal) {
        console.log(betVal);
        if (this.deposid != null) {
            if (betVal > this.deposid) {
                alert('Not enoght plaese deposid');
                return false;
            }
        }
        this._bet = betVal;
        return true;
    }
    // איפוס
    resetPlayerInfo() {
        this._cards = [];
        this._score = 0;
        this._bet = 0;
    }
    // עידכון תקציב
    upDateCountMoney(win) {
        if (this._bet != null && this._deposid != null) {
            if (win) {
                this._deposid += this._bet;
            }
            else {
                this._deposid -= this._bet;
            }
        }
    }
    get deposid() {
        return this._deposid;
    }
    get cards() {
        return this._cards;
    }
    get score() {
        return this._score;
    }
    get bet() {
        return this._bet;
    }
    set scoreSet(val) {
        this._score = val;
    }
}
