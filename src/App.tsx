import { Calculator, Footer, Navbar } from "./layout";

function App() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Navbar />
      <div className="flex items-center justify-center py-4">
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
