import Header from "./components/blocks/Header";
import Overview from "./components/blocks/Overview";
import Gallery from "./components/blocks/Gallery";
import Awards from "./components/blocks/Awards";

function App() {
  return (
      <div className='App'>

          <Header />
          <Overview />
          <Gallery/>
          <Awards/>

          {/*<Routes>*/}
          {/*  <Route path='/' element={<Home />} />*/}
          {/*  <Route path='privacy-policy' element={<PrivacyPolicy />} />*/}
          {/*</Routes>*/}
          {/*<Footer/>*/}
      </div>

  );
}

export default App;
