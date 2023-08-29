import React, { useState } from 'react'
import './App.css'

function App() {

  return (
    <article>
        <header>
          <img src="https://unavatar.io/kikobeats" alt="El avatar de martín" />
          <div>
            <strong>Martín García</strong>
            <span>@martingarcia</span>
          </div>
        </header>
        <aside>
          <button>
              Seguir
          </button>
        </aside>
    </article>
  )
}

export default App
