import Head from 'next/head'
import Image from 'next/image'

import Carrousel from '../components/carrousel/carrousel';


import Header from '../components/layout/header.jsx'

import styles from '../styles/Home.module.css'

export default function Home() {

  const imagenes =[
  "https://res.cloudinary.com/zunrise/image/upload/v1655831414/Mr%20Joe/280290331_2328734710611390_1729166559914560737_n_vhibp6.jpg",
  "https://res.cloudinary.com/zunrise/image/upload/v1655831415/Mr%20Joe/280557671_2323330481151813_2032560667800049410_n_ugitla.jpg",
  "https://res.cloudinary.com/zunrise/image/upload/v1655831415/Mr%20Joe/280589495_2328705573947637_2525947860889040770_n_mgcbbi.jpg",
  "https://res.cloudinary.com/zunrise/image/upload/v1655831415/Mr%20Joe/286447799_2348027728682088_5801947496696797152_n_tp1dxs.jpg",
  "https://res.cloudinary.com/zunrise/image/upload/v1655831415/Mr%20Joe/280604643_2328716920613169_2578464500575024702_n_pggizl.jpg",
  "https://res.cloudinary.com/zunrise/image/upload/v1655831415/Mr%20Joe/281372755_2328680650616796_3333050883131109743_n_xkzgho.jpg",
  ];

  return (
    <>
    <Header/>
    <main className={styles.home} >
        <Carrousel images={imagenes} />
        
      <figure className={styles.fondo}>
        <img className={styles.img} src="http://mrjoe.com.co/wp-content/uploads/2020/12/CJT6386-scaled.jpg" />
      </figure>
    </main>
    
    </>
  )
}
