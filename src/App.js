import Header from "./components/blocks/Header";
import Overview from "./components/blocks/Overview";
import Gallery from "./components/blocks/Gallery";

function App() {
  return (
      <div className='App'>

          <Header />
          <Overview />
          <Gallery/>
          

          {/*<Routes>*/}
          {/*  <Route path='/' element={<Home />} />*/}
          {/*  <Route path='privacy-policy' element={<PrivacyPolicy />} />*/}
          {/*</Routes>*/}
          {/*<Я никита :D />*/}
      </div>

  );
}

export default App;
