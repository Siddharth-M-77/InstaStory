import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoryContext } from '../context/StoryContext';

const InstaStory = () => {
    const { data, deleteStory, filter, setData } = useContext(StoryContext);

    const [click, setClick] = useState(null);

    const handleClick = (story) => {
        setClick(story);
        setTimeout(() => {
            setClick(null);
        }, 2000);
    };

    const handleDelete = (story) => {
        deleteStory(story);
        setClick(null);
    };

    // Toggle the like status of a story
    const toggleLike = (story) => {
        const updatedData = data.map((item) =>
            item.url === story.url ? { ...item, liked: !item.liked } : item
        );
        setData(updatedData);
    };

    return (
        <div className="w-screen h-screen relative flex flex-col justify-start items-center  bg-[#17304A] text-center">
            {click && (
                <div className="w-full h-full overflow-hidden fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <img className="object-contain w-full h-full" src={click.url} alt="" style={click.filter} />
                    <button onClick={() => handleDelete(click)} className="p-2 rounded-full bg-white shadow-xl absolute bottom-5  right-4">Delete Story</button>

                    {/* Like button */}
                    <button
                        onClick={() => toggleLike(click)}
                        className={`p-4 rounded-full absolute bottom-5 left-5 ${click.liked ? 'bg-red-600' : 'bg-gray-500'}`}
                    >
                        {click.liked ? '❤️ Liked' : '🤍Like'}
                    </button>
                </div>
            )}

            <div className="flex w-full overflow-x-auto whitespace-nowrap items-center gap-2   scrollbar-transparent">
                {data?.length > 0 && (
                    data?.map((story, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(story)}
                            className="lg:h-52 lg:w-52 w-40 h-40 shrink-0 border-indigo-600 border-4 rounded-full overflow-hidden relative"
                        >
                            <img
                                src={story.url}
                                alt={`Story ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={story.filter}
                            />

                            {/* Like button for each story thumbnail */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent the thumbnail click from triggering the story view
                                    toggleLike(story);
                                }}
                                className={`absolute bottom-2 right-[40%] p-2 rounded-full ${story.liked ? 'bg-red-600' : 'bg-gray-500'}`}
                            >
                                {story.liked ? '❤️' : '🤍'}
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Upload Story Button */}
            <div className="lg:mt-10 mt-72">
                <Link to={"/uploads"} className="px-6 py-3 bg-black hover:bg-white hover:text-black text-center text-white text-xl border-indigo-600 border-4 rounded-lg">
                    Upload Story
                </Link>
            </div>
        </div>
    );
};

export default InstaStory;
