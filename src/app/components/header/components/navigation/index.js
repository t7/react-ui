import classnames from 'classnames'
import React, { useState } from 'react'
import { Link, Menu as DocsMenu } from 'docz'
import styles from './index.module.scss'

const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = useState()

  const toggleSelectedIndex = (index) => {
    if (selectedIndex === index) {
      return setSelectedIndex()
    }

    return setSelectedIndex(index)
  }

  return (
    <DocsMenu>
      {(menu = []) => {
        return (
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              {menu.map((item, index) => {
                return (
                  <li key={item.id}>
                    {item.route ? (
                      <Link to={item.route}>{item.name}</Link>
                    ) : (
                      <div>
                        <button
                          className={styles.trigger}
                          onClick={() => { return toggleSelectedIndex(index) }}
                        >
                          {item.name}
                        </button>
                        <ul
                          className={
                            classnames(styles['drop-down'], {
                              [styles.active]: selectedIndex === index
                            })}
                        >
                          {item.menu.map((subItem) => {
                            return (
                              <li key={subItem.id}><Link to={subItem.route}>{subItem.name}</Link></li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        )
      }}
    </DocsMenu>
  )
}

export default Navigation
