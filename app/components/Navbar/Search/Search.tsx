'use client'
import styles from './Search.module.scss'
import React from 'react'
interface SearchProps{
    title:string,
    children:React.ReactNode;
}
const Search = ({title,children}:SearchProps) => {
  return (
    <form className={`flex-d ${styles.form_search_nav}`}>
      <input className="form-control me-2" type="search" placeholder={`${title}`} aria-label="Search"/>
      <button type="submit" className={styles.icon_search_nav}>{children}</button>
    </form>
  )
}

export default Search
