class Rectangle {
    // A constructor, to give initial arguments (like init?)
    constructor(height,width) {
        // We can define attributes stored on the instance with `this` (similar to self. in python?)
        this.height = height;
        this.width = width;
    }

    // A method
    getArea(){
        return this.height * this.width;
    }
}

module.exports = Rectangle;