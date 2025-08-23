import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";

const RhinoPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Rhino Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-psyc-orange">
              Rhino
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the prehistoric world of rhinoceroses through our exclusive video collection
            </p>
          </div>
        </section>

        {/* Rhino Videos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Rhino Videos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rhino Video 1 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Rhino in Natural Habitat
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Watch rhinos in their natural grassland environment
                </p>
              </div>

              {/* Rhino Video 2 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Rhino Behavior
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Understanding rhino social behavior and communication
                </p>
              </div>

              {/* Rhino Video 3 */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                  Rhino Conservation
                </h3>
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">Video Placeholder</span>
                </div>
                <p className="text-white/80 text-sm">
                  Critical efforts to protect endangered rhino species
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

export default RhinoPage;

