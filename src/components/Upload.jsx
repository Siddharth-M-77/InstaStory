import React, { useContext, useState } from 'react';
import { StoryContext } from '../context/StoryContext';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();
    const { addStory, setFilter } = useContext(StoryContext);
    const [file, setFile] = useState(null); // Initialize file as null
    const [grayscale, setGrayScale] = useState(0);
    const [blur, setBlur] = useState(0);
    const [brightness, setbrightness] = useState(1);



    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
        }
    };



    const handleUpload = () => {
        if (file) {
            addStory(file, imageFilter); // Add the file URL to the stories
            alert('File uploaded successfully!');
            navigate('/');

        } else {
            alert('Please select a file first.');
        }
    };

    const imageFilter = {
        filter: `grayscale(${grayscale}) blur(${blur}px) brightness(${brightness})`
    }

    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col justify-center items-center gap-4">
            <form>
                <input
                    className="border-dashed border-white p-5 border-2 rounded-md"
                    type="file"
                    onChange={handleFileChange}
                />
            </form>

            {file && (
                <div className="h-96 w-96 bg-gray-600 flex items-center justify-center">
                    <img src={file} alt="Preview" style={imageFilter} className='w-full h-full object-contain' />
                </div>
            )}


            <div className='flex gap-4 flex-col'>
                <div className='flex items-center justify-center gap-2'><h4>GraySCale : {grayscale}</h4>
                    <input onChange={(e) => setGrayScale(e.target.value)} type="range" min={0} max={1} step={0.2} value={grayscale} /></div>
                <div className='flex items-center justify-center gap-2'><h4>Brightness : {brightness}</h4>
                    <input onChange={(e) => setbrightness(e.target.value)} type="range" min={0} max={1} step={0.2} value={brightness} /></div>
                <div className='flex items-center justify-center gap-2'><h4>Blur : {blur}</h4>
                    <input onChange={(e) => setBlur(e.target.value)} type="range" min={0} max={1} step={0.2} value={blur} /></div>

            </div>


            {/* Upload button */}
            <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-md"
                onClick={handleUpload}
            >
                Upload File
            </button>
        </div>
    );
};

export default Upload;
