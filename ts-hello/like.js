"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_numberOfLikes, _onState) {
        this._numberOfLikes = _numberOfLikes;
        this._onState = _onState;
    }
    LikeComponent.prototype.clickLike = function () {
        if (this._onState) {
            this._numberOfLikes++;
        }
        else {
            this._numberOfLikes--;
        }
        this._onState = !this._onState;
    };
    Object.defineProperty(LikeComponent.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "onState", {
        get: function () {
            return this._onState;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
