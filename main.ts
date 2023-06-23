for (let index = 0; index < 1; index++) {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D D F E C D F ", music.volume()), music.PlaybackMode.UntilDone)
    basic.showString("hola")
    basic.showString("vienvenidos a la precentaccion de la radacion  ")
}
basic.forever(function () {
	
})
