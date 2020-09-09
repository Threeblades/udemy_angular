"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var likeButton = new like_1.LikeComponent(66, true);
likeButton.clickLike();
console.log(likeButton.numberOfLikes, likeButton.onState);
likeButton.clickLike();
console.log(likeButton.numberOfLikes, likeButton.onState);
