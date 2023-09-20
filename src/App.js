import Header from "./components/blocks/Header";
import Overview from "./components/blocks/Overview";
import Gallery from "./components/blocks/Gallery";
import Awards from "./components/blocks/Awards";
import Categories from "./components/blocks/Categories";
import Footer from "./components/blocks/Footer";
import Rules from "./components/blocks/Rules";


function App() {
  return (
      <div className='App'>

          <Header />
          <Overview />
          <Gallery/>
          <Awards/>
          <Categories/>
          <Rules/>
          <Footer/>

          {/*<Routes>*/}
          {/*  <Route path='/' element={<Home />} />*/}
          {/*  <Route path='privacy-policy' element={<PrivacyPolicy />} />*/}
          {/*</Routes>*/}
          {/*<Footer/>*/}
      </div>

  );
}

export default App;
