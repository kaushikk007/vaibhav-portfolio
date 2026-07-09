import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorGlow from './components/layout/CursorGlow';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Stack from './components/sections/Stack';
import Certifications from './components/sections/Certifications';
import Content from './components/sections/Content';
import Terminal from './components/sections/Terminal';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Certifications />
        <Content />
        <Terminal />
      </main>
      <Footer />
    </div>
  );
}
