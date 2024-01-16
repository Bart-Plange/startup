import { Home, Navbar, Services, About, Contact, Footer, Cta, Process, BackgroundGlow, ProductPopup } from '../components';
const HomePage = () => {
    return <div>
      <Navbar  />
      <Home />
      <Cta />
      <BackgroundGlow>
      <Services />
      </BackgroundGlow>
      <Process />
      <About />
      <Contact />
      <ProductPopup />
      <Footer />
  </div>;
};

export default HomePage;
