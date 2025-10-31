
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <section>
      <header className="z-10 absolute">
        <Header />
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </section>
  );
}
