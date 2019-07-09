class Character {
    constructor (x, y) {
        if(new.target === Character){
            throw new TypeError("Cannot instantiate this class!")
        }
        Character.count++;
        this.x = x;
        this.y = y;
    }

    get xilon () { return this.x; }
    set xilon (xilon) { this.x = xilon; }
    get yilon () { return this.y; }
    set yilon (yilon) { this.y = yilon; }

    set position (position) {
        if(position.x > 10 || position.y > 10 || position.x < 0 || position.y < 0){
            throw new TypeError("Out of bounds!");
        }
        this.x = position.x;
        this.y = position.y;
    }

}

Character.count = 0;

class PlayerCharacter extends Character {
    constructor (x, y) {
        super(x, y);
    }

}

class NonPlayerCharacter extends Character {
    constructor (x, y) {
        super(x, y);
    }
}

const randomPosition = () => {
    const x = Math.floor(Math.random() * 10 + 1);
    const y = Math.floor(Math.random() * 10 + 1);
    return [x, y];
}

console.log("Character count: " + Character.count);

const player1 = new PlayerCharacter(...randomPosition());
const player2 = new NonPlayerCharacter(...randomPosition());

console.log("Player1 position is x=" + player1.xilon + " and y=" + player1.yilon);
console.log("Player2 position is x=" + player2.xilon + " and y=" + player2.yilon);

console.log("Character count: " + Character.count);

player1.position = { x: 5, y: 5 };
console.log("Player1 position is x=" + player1.xilon + " and y=" + player1.yilon);
console.log("Player2 position is x=" + player2.xilon + " and y=" + player2.yilon);

const characterPlayer = new Character(8,8);