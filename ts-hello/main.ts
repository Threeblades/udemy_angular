import { LikeComponent } from './like'


let likeButton = new LikeComponent(66, true);

likeButton.clickLike();

console.log(likeButton.numberOfLikes, likeButton.onState);

likeButton.clickLike();

console.log(likeButton.numberOfLikes, likeButton.onState);