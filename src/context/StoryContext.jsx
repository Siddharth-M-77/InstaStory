import { createContext, useEffect, useState } from "react";

export const StoryContext = createContext();

const StoryContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])

    const addStory = (story, filter) => {
        const newStory = {
            url: story,
            timestamps: Date.now(),
            filter: filter,
            likes: false
        };
        setData([newStory, ...data]);
    };

    const deleteStory = (story) => {
        const filteredData = data.filter((data) => data.url !== story.url);
        setData(filteredData);
    };

    useEffect(() => {
        const filteredData = data.filter((story) => story.timestamps > Date.now() - 86400000);

        if (filteredData.length !== data.length) {
            setData(filteredData);
        }
    }, [data]);

    return (
        <StoryContext.Provider value={{ data, setData, addStory, deleteStory }}>
            {children}
        </StoryContext.Provider>
    );
};

export default StoryContextProvider;
