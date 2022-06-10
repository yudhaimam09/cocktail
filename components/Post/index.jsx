import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function DrinkList(props) {
    const item = props.drink
    return (
        <Link href={"/drink/" + item.idDrink}>
            <a className={styles.card} >
                <img src={item.strDrinkThumb} alt='Cocktails Image'/>
                <p className='text-center'>{item.strDrink}</p>
            </a>
        </Link>
    )
}