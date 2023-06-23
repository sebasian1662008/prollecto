for (let index = 0; index < 1; index++) {
    basic.showString("hola")
    while (true) {
        music.play(music.stringPlayable("C D D F E C D F ", 500), music.PlaybackMode.UntilDone)
    }
    basic.showString("vienvenidos a la precentaccion de la radacion  ")
    while (true) {
        music.play(music.stringPlayable("C G D E D C F C ", 500), music.PlaybackMode.UntilDone)
    }
}
