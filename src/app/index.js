import { DocPreview } from 'docz'
import React from 'react'
import Container from 'components/container'
import styles from './index.module.css'
import Header from './components/header'

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Container>
          <DocPreview />
        </Container>
      </main>
    </div>
  )
}

export default App
