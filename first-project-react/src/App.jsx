import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const users = [
    {
      userName: 'martingarcia99',
      name: 'Martín García'
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Durán'
    }
  ]
  
  return (
    <section className="App">
      {
        users.map(user => {
          const {userName, name} = user
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              name={name}
            />
          )
        })
      }
    </section>
    
  )
}


