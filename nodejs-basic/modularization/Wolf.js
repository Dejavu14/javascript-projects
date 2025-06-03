class Wolf{
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log("Owoooo!");
    }
}

module.exports = Wolf;