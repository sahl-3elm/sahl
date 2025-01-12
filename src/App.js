import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Title from './components/Title';
import About from './pages/About';
import Shopify from './pages/Shopify';
import Ads from './pages/Ads';
import Affiliate from './pages/AffiliateMarketing';
import Api from './pages/Api';
import Block from './pages/BlockChain';
import Books from './pages/Books';
import Cloud from './pages/CloudDev';
import Contact from './pages/ContactMarkiting';
import Courses from './pages/Courses';
import Programing from './pages/ProgramingAndDev';
import Css from './pages/Css';
import Html from './pages/Html';
import Asks from './pages/Asks';
import Email from './pages/EmailMarkiting';
import German from './pages/GermanLang';
import Graphic from './pages/GraphicDesign';
import Home from './pages/Home';
import Js from './pages/Js';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Machine from './pages/MachineLearning';
import Mobile from './pages/MobileAppDev';
import Python from './pages/Python';
import Ui from './pages/UiDesign';
import Social from './pages/SocialMediaMarketing';
import Seo from './pages/Seo';
import Pmp from './pages/PMP';
import ReactPage from './pages/React';
import Comment from './components/Comments';
import RequireAuth from './components/auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <RequireAuth>
              <Title title="sahl - home page">
                <Home />
              </Title>
            </RequireAuth>
          }
        />
        {[
          { path: '/html', title: 'HTML', component: <Html /> },
          { path: '/com/html', title: 'HTML Comments', component: <Comment cat="html" /> },
          { path: '/js', title: 'JavaScript', component: <Js /> },
          { path: '/com/js', title: 'JS Comments', component: <Comment cat="js" /> },
          { path: '/about', title: 'About Me', component: <About /> },
          { path: '/ads', title: 'Ads', component: <Ads /> },
          { path: '/com/ads', title: 'Ads Comments', component: <Comment cat="ads" /> },
          { path: '/affiliate', title: 'Affiliate Marketing', component: <Affiliate /> },
          { path: '/com/affiliate', title: 'Affiliate Comments', component: <Comment cat="affiliate" /> },
          { path: '/api', title: 'API Development', component: <Api /> },
          { path: '/com/api', title: 'API Comments', component: <Comment cat="api" /> },
          { path: '/block', title: 'Blockchain', component: <Block /> },
          { path: '/com/block', title: 'Blockchain Comments', component: <Comment cat="block" /> },
          { path: '/books', title: 'Books', component: <Books /> },
          { path: '/com/books', title: 'Books Comments', component: <Comment cat="books" /> },
          { path: '/cloud', title: 'Cloud Development', component: <Cloud /> },
          { path: '/com/cloud', title: 'Cloud Comments', component: <Comment cat="cloud" /> },
          { path: '/contact', title: 'Contact Marketing', component: <Contact /> },
          { path: '/com/contact', title: 'Contact Comments', component: <Comment cat="contact" /> },
          { path: '/courses', title: 'Courses', component: <Courses /> },
          { path: '/com/courses', title: 'Courses Comments', component: <Comment cat="courses" /> },
          { path: '/css', title: 'CSS', component: <Css /> },
          { path: '/com/css', title: 'CSS Comments', component: <Comment cat="css" /> },
          { path: '/email', title: 'Email Marketing', component: <Email /> },
          { path: '/com/email', title: 'Email Comments', component: <Comment cat="email" /> },
          { path: '/german', title: 'Learn German', component: <German /> },
          { path: '/com/german', title: 'German Comments', component: <Comment cat="german" /> },
          { path: '/graphic', title: 'Graphic Design', component: <Graphic /> },
          { path: '/com/graphic', title: 'Graphic Design Comments', component: <Comment cat="graphic" /> },
          { path: '/machine', title: 'Machine Learning', component: <Machine /> },
          { path: '/com/machine', title: 'Machine Learning Comments', component: <Comment cat="machine" /> },
          { path: '/mobile', title: 'Mobile Development', component: <Mobile /> },
          { path: '/com/mobile', title: 'Mobile Comments', component: <Comment cat="mobile" /> },
          { path: '/python', title: 'Python', component: <Python /> },
          { path: '/com/python', title: 'Python Comments', component: <Comment cat="python" /> },
          { path: '/ui', title: 'UI Design', component: <Ui /> },
          { path: '/com/ui', title: 'UI Comments', component: <Comment cat="ui" /> },
          { path: '/social', title: 'Social Media Marketing', component: <Social /> },
          { path: '/com/social', title: 'Social Media Comments', component: <Comment cat="social" /> },
          { path: '/seo', title: 'SEO', component: <Seo /> },
          { path: '/com/seo', title: 'SEO Comments', component: <Comment cat="seo" /> },
          { path: '/pmp', title: 'PMP', component: <Pmp /> },
          { path: '/com/pmp', title: 'PMP Comments', component: <Comment cat="pmp" /> },
          { path: '/react', title: 'React', component: <ReactPage /> },
          { path: '/com/react', title: 'React Comments', component: <Comment cat="react" /> },
          { path: '/shopify', title: 'Shopify', component: <Shopify /> },
          { path: '/com/shopify', title: 'Shopify Comments', component: <Comment cat="shopify" /> },
          { path: '/programing', title: 'Programming', component: <Programing /> }
        ].map(({ path, title, component }) => (
          <Route
            key={path}
            path={path}
            element={
              <RequireAuth>
                <Title title={title}>{component}</Title>
              </RequireAuth>
            }
          />
        ))}

        {/* Login and Signup without RequireAuth */}
        <Route
          path="/login"
          element={
            <Title title="Login">
              <Login />
            </Title>
          }
        />
        <Route
          path="/signup"
          element={
            <Title title="Sign Up">
              <Signup />
            </Title>
          }
        />
        <Route
          path="*"
          element={
            <Title title="sahl - Home page">
              <Home />
            </Title>
          }
        />
        <Route
          path="/asks"
          element={
            <Title title="sahl - asks page">
              <Asks />
            </Title>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
