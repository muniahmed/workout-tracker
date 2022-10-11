import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyExercises from './screens/MyExercises/MyExercises';
import LoginPage from './screens/LoginPage/LoginPage';
import SignUpPage from './screens/SignUpPage/SignUpPage';
import AddNewExercisePage from './screens/AddNewExercisePage/AddNewExercisePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='exercises' element={<MyExercises />} />
          <Route path='addexercise' element={<AddNewExercisePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
