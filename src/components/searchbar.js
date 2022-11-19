import React from "react";
import { useNavigate } from "react-router-dom";


export default function Search() {

    // Handle search input
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();
    

    // Go to link on enter
    function handleSubmit(event) {        
        navigate(`/generate/${search}`);
    }

    return (
        <form className="max-w-lg text-sm font-normal " onSubmit={handleSubmit} >
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 bg-transparent left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Generate art from wallet address"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border border-pink-100 border-opacity-5 rounded-md outline-none bg-gray-50 bg-opacity-5 focus:border-red-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    );
}
