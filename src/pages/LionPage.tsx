import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";

const LionPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Lion Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-psyc-orange">
              Lion
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the majestic world of lions through our curated collection of videos
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Lion Content Coming Soon
            </h2>
            <p className="text-center text-white/80 text-lg">
              We're working on bringing you amazing lion content. Check back soon!
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LionPage;
