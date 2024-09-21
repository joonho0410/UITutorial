import Link from "next/link";
import styles from "./nav.module.scss"

function NavBar () {
    return (
        <nav className={styles.container}>
            <div className={styles.leftContents}>
                <Link className={styles.contents} href="/"> Tutorials </Link>
            </div>
            <div className={styles.rightContents}>
                <Link className={styles.contents} href="/sequence"> Sequence </Link>
                <Link className={styles.contents} href="/sequence"> Sequence2 </Link>
            </div>
        </nav>
    )
}

export default NavBar