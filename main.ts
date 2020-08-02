input.onButtonPressed(Button.A, function () {
    music.playMelody("E E E - E E E - ", 120)
    music.playMelody("E G C D E - F F ", 120)
    music.playMelody("F F F E E E E D ", 120)
    music.playMelody("D E D - G - - - ", 120)
    music.playMelody("E E E - E E E - ", 120)
    music.playMelody("E G C D E - F F ", 120)
    music.playMelody("F F F E E E G G ", 120)
    music.playMelody("F D C - - - - - ", 120)
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Heart)
}
