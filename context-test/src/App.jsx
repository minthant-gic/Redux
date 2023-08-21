import './App.css'
import { useState } from 'react';
import { ThemeContext, AuthContext } from './contexts';
import Page from './Page';

function App() {
  const [theme, setTheme] = useState('black');
  const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
