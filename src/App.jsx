import { useState } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Christian Earl V. Mahumot" />
      </div>
    </SettingsContext>
  )
}

export default App
