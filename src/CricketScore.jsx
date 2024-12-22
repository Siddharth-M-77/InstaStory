import React, { useEffect, useState } from "react";

const CricketScore = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://api.cricapi.com/v1/cricScore?apikey=9a0a8c4c-ea2f-435d-9015-6d4919507882"
            );
            const result = await response.json();
            setData(result.data || []);
            console.log(result.data)
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredData = data.filter(
        (match) =>
            match.status !== "Match not started" &&
            (match.series.toLowerCase().includes(search.toLowerCase()) ||
                match.t1.toLowerCase().includes(search.toLowerCase()) ||
                match.t2.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="w-full bg-gradient-to-b from-blue-500 to-indigo-600 ">
            <div className="flex justify-center items-center md:gap-6 mb-8 flex-col md:flex-row  p-4">
                <input
                    type="text"
                    placeholder="Search Match or Series"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={getData}
                    className="px-4 mt-4 md:mt-0 md:w-32 w-full py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white">Live Cricket Score App</h1>
                <p className="text-lg text-white mt-2">
                    Get real-time updates on your favorite matches!
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-hidden">

                {loading ? (
                    <p className="text-white text-center text-lg col-span-full">
                        Loading data...
                    </p>
                ) : filteredData.length > 0 ? (
                    filteredData.map((match) => (
                        <div
                            key={match.id}
                            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <h3 className="text-lg font-bold text-gray-800">{match.series}</h3>
                            <p className="text-sm text-gray-600">{match.matchType}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-center">
                                    <img
                                        src={match.t1img}
                                        alt={match.t1}
                                        className="w-16 h-16 mx-auto"
                                    />
                                    <p className="text-gray-800 font-medium">{match.t1}</p>
                                    <p className="text-gray-600">{match.t1s || "N/A"}</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src={match.t2img}
                                        alt={match.t2}
                                        className="w-16 h-16 mx-auto"
                                    />
                                    <p className="text-gray-800 font-medium">{match.t2}</p>
                                    <p className="text-gray-600">{match.t2s || "N/A"}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-700">
                                Status:
                                <span className="font-semibold text-green-600">
                                    {match.status}
                                </span>
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="w-screen h-full ">
                        <p className="w-full text-6xl text-white text-center font-bold mt-32 ">
                            No matches found! 😢
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CricketScore;
