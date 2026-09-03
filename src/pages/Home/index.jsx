import CategorySection from "../../components/CategorySection";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="h-screen">
      <main>
        <HeroSection />
        <CategorySection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
