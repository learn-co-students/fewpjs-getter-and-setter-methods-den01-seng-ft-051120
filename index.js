class Circle {
    constructor(radius) {
        this.radius = radius;
        
    }

    pi = Math.PI

    get circumference() {
        return (this.radius * 2) * pi
    }

    get diameter() {
        return this.radius * 2
    }

    get area() {
        return (this.radius* this.radius) * pi;
    }

    set diameter(newDiameter) {
        this.radius = newArea / 2;
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference/pi)/2
    }

    set area(newArea) {
        this.radius = (Math.sqrt(newArea))/pi
    }

}