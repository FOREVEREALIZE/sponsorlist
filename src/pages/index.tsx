import {Search} from "lucide-react";
import {useEffect, useState} from "react";
import axios from "axios";
import {SearchResult} from "@/pages/api/search";
import MainGridItem from "@/components/MainGridItem";
import {Brand} from "@prisma/client";

export default function Home() {
    const [data, setData] = useState<Brand[]>([])
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`/api/search?q=${query}`).then(({data: _searchResults}) => {
            const searchResults = _searchResults as SearchResult[];
            const query = searchResults.map((result) => result.id).join(",");

            axios.get(`/api/data?q=${query}`).then(({data: _data}) => {
                setData(_data as Brand[])
            })
        })
    }, [query])


    return (
        <main className="w-full h-screen flex flex-col p-16 bg-black items-center gap-16">
            <h1 className="font-kanit text-9xl font-extrabold">SPONSORLIST</h1>
            <h2 className="font-kanit text-4xl font-extrabold w-3/5 text-center">
                THE SOURCE OF SPONSORSHIP INFORMATION FOR CONTENT CREATORS AND CELEBRITIES
            </h2>

            <div className="w-2/3 h-16 border-2 border-white rounded-xl flex items-center p-4 bg-neutral-800 gap-4">
                <Search className="text-neutral-500" />
                <input
                    type="text"
                    className="font-kanit text-2xl font-semibold placeholder:text-neutral-500 text-white bg-transparent focus:outline-none w-full"
                    id="search"
                    placeholder="SEARCH FOR A BRAND"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </div>

            <div className="grid grid-cols-5 gap-8 w-5/6">
                {data.map((item) => {
                    const score = Math.round(Math.random() * 10);

                    return (
                        <MainGridItem key={item.id} data={item} />
                    )
                })}
            </div>
        </main>
    );
}
