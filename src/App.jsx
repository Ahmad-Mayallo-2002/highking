import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Blog } from './components/Blogs';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Blog />
      <About />
      <Contact />
    </>
  );
}

export default App;
