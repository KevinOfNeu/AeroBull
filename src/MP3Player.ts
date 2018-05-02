import {IPlayer} from "./IPlayer";

import  * as Player from 'play-sound'
import {
    getAudioPath
} from './utils/FileUtil'

const player = new Player({})

export class MP3Player implements IPlayer {

    play(fileName:string):void {
        player.play(getAudioPath(fileName), (err) => {
        })
    }
}