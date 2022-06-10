import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import DrinkList from '../components/Post'
import NavDial from '../components/NavDial'
import Head from 'next/head'


export default function Drink() {
    const [state, setState] = useState({
        posts: [],
        searchDrink: ''
    })

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
        })
    })

    const handleChange = (e) => {
        const search = e.target.value;
        console.log(search)
        setState({ searchDrink: search })

        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        } else {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        }
    }

    if(!state.posts) {
        return (
            <div className='no-data text-center'>
                <h2>No Data Found</h2>
                <Link href='/'>Go Back To Home</Link>
            </div>
        )
    }

    return(
        <div className='p-5 bg-pink'>
            <Head>
                <title>Drink List</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1 className='text-center text-4xl antialiased mt-2 mb-4 font-mono'>This is List of The Cocktails !</h1>
                <div className='grid grid-cols-4'>
                    <form className='mb-2 w-full col-span-4 md:col-start-2 md:col-span-2'>
                        <input type="text" name="searchDrink" id="searchDrink" className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
                            placeholder="Search here ..." value={state.searchDrink} 
                            onChange={handleChange}/>
                    </form>
                </div>
            <div className={styles.grid}>
                { state.posts.length > 0 && state.posts.map(i => <DrinkList key={i.idDrink} drink={i} />)}
            </div>
            <NavDial/>
        </div>
    )
}