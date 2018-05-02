import {CronJob} from 'cron'
import * as say from 'say'

import {MP3Player} from './MP3Player'
import {Audio} from './Audio'
import {IPlayer} from "./IPlayer"
import {ICheck} from "./checker/ICheck";
import {BitcoinChecker} from "./checker/BitcoinChecker";


var CronJob = require('cron').CronJob

const player:IPlayer = new MP3Player()
const checker:ICheck = new BitcoinChecker()

say.speak("Hello, begin now...")

new CronJob(
    '*/5 * * * * *',
    () => {
        if (checker.check()) {
            player.play(Audio.Roar)
        }
    },
    () => {},
    true, /* Start the job right now */
)