import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from '../../css/layout/header.module.css'

export default function Header(){
	const router = useRouter();

	return(
		<header className={styles.header}>

			<figure className={styles.logo}>
				<Link href={"/"}>
					<img src={"https://mrjoe.com.co/wp-content/uploads/2022/03/LOGO-PLAZA-DEL-JOE-WEB-150x150.png"} />
				</Link>
			</figure>

			<nav className={styles.navbar}>

				<Link href="/menu">
					<a id={router.pathname === "/menu" ? styles.actived : null} className={styles.link}>menu</a>
				</Link>

				<a className={styles.link}>puntos de atencion</a>

				<a className={styles.link}>trabaja con nosotros</a>
				<a className={styles.link}>comentarios sobre nosotros</a>
			</nav>
		</header>
	)
}
