import { useState, useEffect } from 'react';

import styles from './carrousel.module.css'

export default function Carrousel({images}){
	const [position,setPosition] = useState(0);

	function nextimg(){
	if(position === images.length - 1){
			setPosition(0)
		}else{
			setPosition(e=> e+1)
		}
	}

	function previmg(){
		if(position === 0){
			setPosition(images.length - 1)
			
		}else{
			setPosition(e=>e-1)
		}
	}

	return (
		<div className={styles.carrousel}>
			<span onClick={previmg} className={styles.left}>  </span>
					
				<figure>
					<img src={images[position]} />
				</figure>
			<span onClick={nextimg} className={styles.right}>  </span>
		</div>
	)
	
}