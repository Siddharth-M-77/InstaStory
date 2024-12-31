import { Route, Routes } from "react-router-dom";
import InstaStory from "./components/InstaStory";
import Upload from "./components/Upload";

const App = () => {
  return (
    <>
      

      <Routes>
        <Route path='/' element={<InstaStory />} />
        <Route path='/uploads' element={<Upload />} />

      </Routes>
    </>
  )
}
export default App;