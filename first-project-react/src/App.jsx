import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const formatUserName = (username) => `@${username}`
  
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="martingarcia99" name="Martín García"/>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="midudev" name="Miguel Angel Durán"/>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} name="Miguel Angel Durán"/>
    </section>
    
  )
}


