import {Container} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {


  
  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
    <Container maxWidth="lg">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/auth" exact element={<Auth/>}/>
      </Routes>
   
    </Container>
    </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
