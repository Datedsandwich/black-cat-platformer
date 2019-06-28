import React from 'react'
import { render } from 'react-dom'
import { config } from './game'
import Phaser from 'phaser'
import styled from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    max-width: 830px;
    padding-bottom: 15px;

    .text-align-center {
        text-align: center;
    }

    hr {
        margin: 15px 0;
    }
`

const GameContainer = styled.div`
    margin-top: 15px;
    padding: 15px;

    border-radius: 5px;
    border: 1px solid grey;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);

    background-color: white;
`

const Application = () => (
    <PageWrapper>
        <GlobalStyle />
        <GameContainer>
            <h1 className="text-align-center">Super BlackCat</h1>
            <p className="text-align-center">
                A Hackday Project made with{' '}
                <a href="https://phaser.io/" target="_blank">
                    Phaser
                </a>
            </p>
            <hr />
            <div id="game" />
        </GameContainer>
    </PageWrapper>
)

render(<Application />, document.getElementById('container'))

new Phaser.Game(config)
