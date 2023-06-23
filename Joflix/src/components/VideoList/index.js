import React from 'react'
import styles from "./VideoList.module.css"
import Card from '../Card'

export default function VideoList({videos, empyHeading}) {
   
    const count = videos.length
    let heading = empyHeading
    if(count>0){
        const noun = count > 1 ? 'videos' : 'video'
        heading=`${count} ${noun}`
    }



  return (
   <>
    <h2>{heading}</h2>
    <section className={styles.videos}>
      {videos.map((video)=> <Card id={video.id} key={video.id}/>)}
    </section>
    </> 
  )
}
