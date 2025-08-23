import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";

const GaurPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Gaur Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6">🐂</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-psyc-orange">
              Gaur
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the largest bovine species through our exclusive gaur video collection
            </p>
          </div>
        </section>

        {/* Gaur Videos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Gaur Videos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Gaur Video 1 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Gaur in Natural Habitat
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Watch gaurs in their natural forest environment
                </p>
              </div>

              {/* Gaur Video 2 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Gaur Behavior
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Understanding gaur social behavior and communication
                </p>
              </div>

              {/* Gaur Video 3 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Gaur Conservation
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Efforts to protect and preserve gaur populations
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default GaurPage;

