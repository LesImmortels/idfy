import React from "react";
import Card from "../components/cards";
import Navbar from "../components/navbar";
import Search from "../components/searchbar";

export default function Home() {

    return <div>
        <Navbar/>

        <div className="flex flex-row w-screen px-2 sm:px-16 lg:px-32 text-white">
            <div className="text-4xl font-black">
                <div className="pt-24 pb-8">
                    IDFY. Create, paste, generate
                </div>
                <Search/>
            </div>
            <Card/>
        </div>




    </div>

}
