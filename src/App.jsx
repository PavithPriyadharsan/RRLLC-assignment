import Navbar from './Navbar'
import Hero from "./Hero";
import Column1 from "./Column1";
import Column2 from './Column2';
import Column3 from './Column3';
import Column4 from './Column4';
import RelatedDeals from './Related-deals';
import Cards from './RelatedCards';
import SignUp from './Signup';
import Footer from './Footer';


function App() {
  return(
    <>
    <Navbar />
    <Hero />
    <Column1 />
    <Column2 />
    <Column3 />
    <Column4 />
    <RelatedDeals />
    <Cards /> 
    <hr />
    <SignUp /> 
    <hr />
    <Footer />
    </>

  )
}

export default App;