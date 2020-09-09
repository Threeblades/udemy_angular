export class LikeComponent {

    constructor(private _numberOfLikes: number, private _onState: boolean){}

    clickLike() {
        if(this._onState){
        this._numberOfLikes++;
        }
        else{
        this._numberOfLikes--;
        }

        this._onState = !this._onState;
    }

    get numberOfLikes (){
        return this._numberOfLikes;
    }

    get onState (){
        return this._onState;
    }
}