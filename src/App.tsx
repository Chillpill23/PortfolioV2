import './App.css'
import { Suspense, lazy } from "react";

import Header from './components/layout/Header'
import Home from './pages/Home'
const Footer = lazy(() => import("./components/layout/Footer"));


function App() {
  return (
    <>
      <Header />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
