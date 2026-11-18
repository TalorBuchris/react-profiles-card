import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';

function App() {
  const men = [
    {
      id: 0, 
      name: 'Daniel Cohen',
      about_me: `A psychology student who is curious about the human mind and people's behavior. Enjoys listening, learning, and understanding what motivates people and how to help them.`,
      type: 'student'
    },
    {
      id: 1,
      name: 'Yehoshua Asyag',
      about_me: `An experienced and passionate teacher who loves sharing knowledge and inspiring students. Believes that every student has unique potential and enjoys helping them grow and succeed.`,
      type: 'teacher'
    },
    {
      id: 2, 
      name: 'Avraham Eliyahu Hadar',
      about_me: `A friendly and outgoing person who enjoys meeting new people and making memories. Always ready to help, share a laugh, and support friends whenever they need it.`,
      type: 'friend'
    },
    {
      id: 3, 
      name: 'Halely Buchritz',
      about_me: `A motivated school student who loves learning new things and exploring creative ideas. Enjoys spending time with friends, taking on new challenges, and achieving her goals.`,
      type: 'student'
    }
  ]

  return (
    <>
      <Header />
      {men.map((item) => {
        return <ProfileCard className='profilesContainer' item={item} key={item.id}/>
      })}
      <Footer />
    </>
  )
}

export default App;
