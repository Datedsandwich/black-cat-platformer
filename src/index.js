import React from 'react'
import { createRoot } from 'react-dom/client'
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

const Header = styled.div`
    position: relative;

    .github-link {
        position: absolute;
        margin: auto;

        top: 0;
        bottom: 0;
        right: 0;

        a {
            color: black;
            font-size: 32px;

            &:hover {
                color: #505050;
            }
        }
    }
`

const Application = () => (
    <PageWrapper>
        <GlobalStyle />
        <GameContainer>
            <Header>
                <h1 className="text-align-center">Super BlackCat</h1>
                <p className="text-align-center">
                    A Hackday Project made with{' '}
                    <a href="https://phaser.io/" target="_blank">
                        Phaser
                    </a>
                </p>
                <div className="github-link">
                    <a href="https://github.com/Datedsandwich/black-cat-platformer" target="_blank">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </Header>
            <hr />
            <div id="game" />
        </GameContainer>
    </PageWrapper>
)

const container = document.getElementById('container')
const root = createRoot(container)
root.render(<Application />)
// Delay Phaser game creation slightly to ensure React has rendered the DOM
setTimeout(() => {
    const game = new Phaser.Game(config)
}, 100)
