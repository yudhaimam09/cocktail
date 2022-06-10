import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavDial from "../../components/NavDial";


const Drink = () => {
    const router = useRouter()
    const { id } = router.query
    const [state, setState] = useState({ post: {} });

    useEffect(() => {
        try {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((response) => response.json())
                .then((result) => {
                    setState({ post: result.drinks[0] });
                });
        } catch (error) {
            console.log(error.response);
        }
    }, [id]);

    return (
        <>
            <Head>
                <title>{!!state.post && state.post.strDrink}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
            <div className='container mx-auto h-screen w-full bg-pink'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
                    <div className="col-span-2 p-10">
                        <img src={!!state.post && state.post.strDrinkThumb} />
                    </div>
                    <div className="col-span-2 p-10 font-mono ">
                        <h1 className="title text-5xl font-bold ">
                        {!!state.post && state.post.strDrink}
                        </h1>

                        <div className="ingredients mt-5  ">
                            <h2 className="text-3xl font-medium">
                                Ingredients
                            </h2>
                            <hr className="w-12 border-t-2 mt-2 border-stone-900" />
                            <ul className="mt-2">
                                {!!state.post.strIngredient1 && (
                                    <li>{state.post.strIngredient1}</li>
                                )}
                                {!!state.post.strIngredient2 && (
                                    <li>{state.post.strIngredient2}</li>
                                )}
                                {!!state.post.strIngredient3 && (
                                    <li>{state.post.strIngredient3}</li>
                                )}
                                {!!state.post.strIngredient4 && (
                                    <li>{state.post.strIngredient4}</li>
                                )}
                                {!!state.post.strIngredient5 && (
                                    <li>{state.post.strIngredient5}</li>
                                )}
                                {!!state.post.strIngredient6 && (
                                    <li>{state.post.strIngredient6}</li>
                                )}
                                {!!state.post.strIngredient7 && (
                                    <li>{state.post.strIngredient7}</li>
                                )}
                                {!!state.post.strIngredient8 && (
                                    <li>{state.post.strIngredient8}</li>
                                )}
                                {!!state.post.strIngredient9 && (
                                    <li>{state.post.strIngredient9}</li>
                                )}
                                {!!state.post.strIngredient10 && (
                                    <li>{state.post.strIngredient10}</li>
                                )}
                                {!!state.post.strIngredient11 && (
                                    <li>{state.post.strIngredient11}</li>
                                )}
                                {!!state.post.strIngredient12 && (
                                    <li>{state.post.strIngredient12}</li>
                                )}
                                {!!state.post.strIngredient13 && (
                                    <li>{state.post.strIngredient13}</li>
                                )}
                                {!!state.post.strIngredient14 && (
                                    <li>{state.post.strIngredient14}</li>
                                )}
                                {!!state.post.strIngredient15 && (
                                    <li>{state.post.strIngredient15}</li>
                                )}
                            </ul>
                        </div>
                        <div className="glass mt-3">
                            <h2 className="text-3xl font-medium">
                                Glass
                            </h2>
                            <hr className="w-12 border-t-2 mt-2 border-stone-900 mb-2" />
                            <p>{state.post.strGlass}</p>
                        </div>
                        <div className="instructions mt-3">
                            <h2 className="text-3xl font-medium">
                                Instructions
                            </h2>
                            <hr className="w-12 border-t-2 mt-2 border-stone-900 mb-2" />
                            <p>{state.post.strInstructions}</p>
                        </div>
                    </div>
                </div>
                <NavDial/>
            </div>                                    
            </div>
        </>
    )
}

export default Drink