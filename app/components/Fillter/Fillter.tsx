"use client"

import React from 'react'
import styles from './Fillter.module.scss'
import { IoMdArrowDropdown } from 'react-icons/io'
import {BsBarChart} from 'react-icons/bs'
import {BiTrendingUp} from 'react-icons/bi'
import {HiOutlineTrendingDown} from 'react-icons/hi'
interface FillterProps{
  filter:{
    id:string,
    title:String 
  }[];
  name_head:string,

}
const Fillter = ({filter,name_head}:FillterProps) => {
  return (
    <div className={styles.container}>
       <div className={styles.row_data_header}>
        <h1>{name_head}</h1>
        <IoMdArrowDropdown />
      </div>
      {
        filter.map((fil)=>{
          return(
            <div className={styles.row_data} key={fil.id}>
            <div className={styles.left_data}>
              <label htmlFor={`${fil.id}`}>{fil.title}</label>
            </div>
            <div className={styles.right_data}>
              <input type="radio" id={`${fil.id}`} name='Category'/>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Fillter
{/* <div className={styles.container}>
       <div className={styles.row_data_header}>
        <h1>Category</h1>
        <IoMdArrowDropdown />
      </div>
      <div className={styles.row_data}>
        <div className={styles.left_data}>
          <BsBarChart />
          <label htmlFor='default'>Trend NFT</label>
        </div>
        <div className={styles.right_data}>
          <input type="radio" id='defaut' name='Category'/>
        </div>
      </div>
      <div className={styles.row_data}>
        <div className={styles.left_data}>
          <BsBarChart />
          <label htmlFor='trend'>Trend NFT</label>
        </div>
        <div className={styles.right_data}>
          <input type="radio" id='trend' name='Category'/>
        </div>
      </div>
      <div className={styles.row_data}>
        <div className={styles.left_data}>
          <BiTrendingUp />
          <label htmlFor='increase'>Inscrease</label>
        </div>
        <div className={styles.right_data}>
          <input type="radio" id='increase'  name='Category'/>
        </div>
      </div>
      <div className={styles.row_data}>
        <div className={styles.left_data}>
          <HiOutlineTrendingDown />
          <label htmlFor='descrease'>Des</label>
        </div>
        <div className={styles.right_data}>
          <input type="radio" id='descrease' name='Category' />
        </div>
      </div>
      
      <div className={styles.row_data}>
        <div className={styles.left_data}>
          <BsBarChart />
          <label htmlFor='new'>New</label>
        </div>
        <div className={styles.right_data}>
          <input type="radio" id='newrend' name='Category' />
        </div>
      </div>
    </div> */}