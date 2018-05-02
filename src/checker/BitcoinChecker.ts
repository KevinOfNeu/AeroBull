import {ICheck} from "./ICheck"
import axios from 'axios'

const PATH = 'https://api.coindesk.com/v1/bpi/currentprice.json'

let priceSerial = []

export class BitcoinChecker implements ICheck {
    check():boolean {
        let ret = false
        axios.get(PATH)
            .then(response => {
                if (response.status === 200) {
                    priceSerial.push(response.data['bpi']['EUR']['rate_float'])
                }
            }).catch(e => console.error(e))
        if (priceSerial.length >= 2) {
            const length = priceSerial.length
            ret = priceSerial[length - 1] < priceSerial[length - 2]
        }
        if (priceSerial.length > 2) {
            priceSerial.shift()
        }
        console.log('Price', priceSerial)
        return ret
    }
}