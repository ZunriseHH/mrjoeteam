import Header from '../../components/layout/header.jsx';

import json from "../../BBDD/products.json";

import styles from '../../css/pages/menu.module.css'

/*
const sections = json.map((e,i)=>{
	return{
		name:i,

		length:e.productos.length,
		productos:e.productos,
		imagen:e.imagen
	}
})*/



export default function Menu(){ 

	let section=[];

	for(let i in json){
		section = [...section,{...json[i],title:i}]
	}

	console.log(section)
	return(
		<main id={styles.menu}>
			<Header / >
			<section className={styles.container}>
				{
					section.map((e,i)=>{
						return (<figure data-title={e.title} className={styles.producto} key={i}>
							
							<img src={e.imagen}/>
						</figure>)
					})
				}

			</section>
		</main>
	)
}