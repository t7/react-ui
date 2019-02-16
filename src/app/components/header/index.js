import React from 'react'
import Container from 'components/container'
import styles from './index.module.scss'
import Navigation from './components/navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>T7 React UI</div>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header
