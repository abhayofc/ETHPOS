import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/Dashboard'
import LoginPage from './Pages/Auth/LoginPage'
import SignupPage from './Pages/Auth/SignupPage'
import AddDetails from './Pages/AddDetails'
import ReceivePayments from './Pages/Sevices/ReceivePayments'
import { Helmet } from 'react-helmet'
import RecentPayments from './Pages/Sevices/RecentPayments'

function App() {


  return (
    <>

      <Helmet>
        <title>ETHPoS</title>
      </Helmet>

      <div className="no-scrollbar bg-gradient-to-b from-[#4158D0] via-[#C850C0]   to-[#ff8170] h-screen">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/dashboard' element={<HomePage />} />
            <Route path='/add-details' element={<AddDetails />} />
            <Route path='/receive-payments' element={<ReceivePayments />} />
            <Route path='/recent-transactions' element={<RecentPayments />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
