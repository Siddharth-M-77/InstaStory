import { Route, Routes } from "react-router-dom";
import InstaStory from "./components/InstaStory";
import Upload from "./components/Upload";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-400 p-10 mx-auto overflow-hidden'>


      <Routes>
        {/* <Route path='/' element={<InstaStory />} />
        <Route path='/uploads' element={<Upload />} /> */}

        <Route path='/' element={<Todo />} />

      </Routes>
    </div>
  )
}
export default App;