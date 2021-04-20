import './style.css'

import { fragment } from 'hyperscript-rxjs'
import { color } from './src'

let elem = color()

document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root')
    let element = elem instanceof Array ? fragment(...elem) : elem
    root.appendChild(element)
})

