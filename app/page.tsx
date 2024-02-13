import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './QueryParamsDisplay.module.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function QueryParamsDisplay() {
  const query = useQuery()
  const entries = Array.from(query.entries())

  return (
    <div className={styles.container}>
      {entries.map(([key, value]) => (
        <div key={key} className={styles.entry}>
          <div className={styles.title}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </div>
          <div className={styles.content}>{value}</div>
        </div>
      ))}
    </div>
  )
}

export default QueryParamsDisplay
