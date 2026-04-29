import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import LocalAdvantage from './components/LocalAdvantage';
import DailyDeals from './components/DailyDeals';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-body">
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <LocalAdvantage />
      <DailyDeals />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
