
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'

import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
        <Navbar />

    <Container customClass="min-height" >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>           
            <Route path='/new-project' element={<NewProject />}/>
            <Route path='/project/:id' element={<Project />}/>
          </Routes>
      </Container>

        <Footer />
    </Router>
  );
}

export default App;