let Num1 = 0
let Num2 = 0
let Num3 = 0
let storage = 0
input.onButtonPressed(Button.A, function () {
    if (!(Num1 == 0 && (Num2 == 0 && Num3 == 0))) {
        for (let index = 0; index < 12; index++) {
            if (Num2 < Num1) {
                storage = Num2
                Num2 = Num1
                Num1 = storage
            }
            if (Num3 < Num2) {
                storage = Num3
                Num3 = Num2
                Num2 = storage
            }
        }
        basic.showNumber(Num1)
        basic.showNumber(Num2)
        basic.showNumber(Num3)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    Num1 = randint(0, 9)
    Num2 = randint(0, 9)
    Num3 = randint(0, 9)
    if (Num1 != Num2 && Num2 != Num3 && Num1 != Num3) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(Num1)
        basic.showNumber(Num2)
        basic.showNumber(Num3)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        Num1 = 0
        Num2 = 0
        Num3 = 0
        basic.clearScreen()
    }
})
