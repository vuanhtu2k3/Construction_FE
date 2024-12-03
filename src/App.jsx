
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/front-end/Home';
import About from './components/front-end/About';
import './assets/css/style.scss'
import Service from './components/front-end/Service';
import Project from './components/front-end/Project';
import Blog from './components/front-end/Blog';
import ContactUs from './components/front-end/ContactUs';
import Login from './components/back-end/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/back-end/Dashboard';
import RequiredAuth from './components/commons/RequiredAuth';
import { default as ShowServices } from './components/back-end/services/Show';
import { default as CreateService } from './components/back-end/services/Create';
import { default as EditService } from './components/back-end/services/Edit';
import { default as ShowProjects } from './components/back-end/projects/Show';
import { default as CreateProjects } from './components/back-end/projects/Create';
import { default as EditProjects } from './components/back-end/projects/Edit';
import { default as ShowArticles } from './components/back-end/articles/Show';
import { default as CreateArticles } from './components/back-end/articles/Create';
import { default as EditArticles } from './components/back-end/articles/Edit';
import { default as ShowTestimonials } from './components/back-end/testimonials/Show';
import { default as CreateTestimonials } from './components/back-end/testimonials/Create';
import { default as EditTestimonials } from './components/back-end/testimonials/Edit';
import { default as ShowMembers } from './components/back-end/members/Show';
import { default as CreateMembers } from './components/back-end/members/Create';
import { default as EditMembers } from './components/back-end/members/Edit';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/dashboard' element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>

          } />
          <Route path='/admin/services' element={<ShowServices />} />
          <Route path='/admin/services/create' element={<CreateService />} />
          <Route path='/admin/services/edit/:id' element={<EditService />} />
          <Route path='/admin/projects' element={<ShowProjects />} />
          <Route path='/admin/projects/create' element={<CreateProjects />} />
          <Route path='/admin/projects/edit/:id' element={<EditProjects />} />
          <Route path='/admin/articles' element={<ShowArticles />} />
          <Route path='/admin/articles/create' element={<CreateArticles />} />
          <Route path='/admin/articles/edit/:id' element={<EditArticles />} />
          <Route path='/admin/testimonials' element={<ShowTestimonials />} />
          <Route path='/admin/testimonials/create' element={<CreateTestimonials />} />
          <Route path='/admin/testimonials/edit/:id' element={<EditTestimonials />} />
          <Route path='/admin/members' element={<ShowMembers />} />
          <Route path='/admin/members/create' element={<CreateMembers />} />
          <Route path='/admin/members/edit/:id' element={<EditMembers />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"

      />
    </>
  )
}

export default App
