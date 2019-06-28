import React from 'react'
import { render } from 'react-dom'
import { config } from './game'
import Phaser from 'phaser'

const Application = () => (
    <div>
        <h1>Super BlackCat</h1>
        <p>A Hackday Project made with Phaser</p>
        <div id="content" />
    </div>
)

render(<Application />, document.getElementById('container'))

new Phaser.Game(config)
