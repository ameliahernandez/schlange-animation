basic.forever(function () {
    basic.showIcon(IconNames.Snake)
    basic.pause(200)
    basic.showLeds(`
        # # . # .
        # # . # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . # #
        . # . # .
        . # # # .
        . . . . .
        `)
})
