import TopHeader from "../app/components/TopHeader";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Homepage from "../app/components/Homepage";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <TopHeader />
      
      <Navbar />
      
      <Homepage />
      
      <Footer />
    </main>
  );
}
