import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import About from './components/About';
import Contact from './components/Contact';
import Blogslist from './components/BlogsList';
import BlogItemDetails from './components/BlogItemDetails';
import NotFound from './components/NotFound';
const App=()=>(
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" Component={Blogslist}/>

    <Route exact path="/about" Component={About}/>
    <Route exact path="/contact" Component={Contact}/>

    <Route exact path="/blogs/:id" Component={BlogItemDetails}/>
    <Route exact path="*" Component={NotFound}/>




  </Routes>
  
  </BrowserRouter>
)

export default App