
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import Post from './components/Post';
import {FeedbackProvider} from './context/FeedbackContext';

function App(){


  return (
      <FeedbackProvider>
        <Router>
          <Header/>
          <div className='container'>
            <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />}/>
              <Route path="/post/*" element={<Post />}/>
            </Routes>
            <AboutIconLink />
          </div>
        </Router>

      </FeedbackProvider>

  )
}

export default App;
