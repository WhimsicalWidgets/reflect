'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import styles from './Page.module.css'

function QueryParamsDisplay() {
  const searchParams = useSearchParams()

  function isSingleWord(value: string) {
    return value.trim().indexOf(' ') === -1
  }

  return (
    <div className={styles.container}>
      {Array.from(searchParams.entries()).map(([key, value]) => {
        const layoutClass = isSingleWord(value) ? styles.inline : ''
        return (
          <div
            key={key}
            className={`${styles.entry} ${key}-${value} ${layoutClass}`}
          >
            <div className={styles.title}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </div>
            <div className={`${styles.content} ${layoutClass}`}>{value}</div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryParamsDisplay
