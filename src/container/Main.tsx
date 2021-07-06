import { Container } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'
import Board from '../components/Board'
import styles from './styles'

const Main = () => {
    return (
        <>
        <Header />
        <Container>
            <Board />
        </Container>
        </>
    )
}

export default Main
