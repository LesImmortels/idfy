import React from "react";
import Navbar from "../components/navbar";
import { Browse, products } from "./browse";
import { useParams } from "react-router-dom";

export default function Auction() {

    const { productId } = useParams();

    const product = products.find((product) => product.id === parseInt(productId));

    return (
        <div>
            <Navbar />
            <div className="fixed z-10 overflow-y-auto">
                <div className="flex justify-center text-center px-4">
                    <div className="relative flex w-full items-center overflow-hidden  px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                            <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg col-span-5">
                                <img src={product.imageSrc} alt={product.imageAlt} className="object-contain h-85 w-85 object-center" />
                            </div>
                            <div className="flex flex-col w-max">
                                <h2 className="text-2xl font-bold text-gray-400 sm:pr-12">{product.name}</h2>
                                <section aria-labelledby="information-heading" className="mt-2">
                                    <h3 id="information-heading" className="sr-only text-white">
                                        Product information
                                    </h3>
                                    <p className="text-2xl text-gray-400">{product.price}</p>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-10">
                                    <h3 id="options-heading" className="sr-only">
                                        Product options
                                    </h3>
                                </section>
                                <section>
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-400">
                                            Price
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="text-gray-500 sm:text-sm">$</span>
                                            </div>
                                            <input
                                                type="text"
                                                name="price"
                                                id="price"
                                                className="block w-full rounded-md text-white border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="0.00"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center">
                                                <label htmlFor="currency" className="sr-only">
                                                    Currency
                                                </label>
                                                <p className="text-white">MASSA</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="options-heading" className="mt-10">
                                    <button type="button" className="text-gray-400 hover:text-gray-500 top-16 right-16">
                                        Bid
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
** Price bar

*/
