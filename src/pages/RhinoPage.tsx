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

        {/* The Problem: India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: India
            </h2>
            
            {/* Karnataka */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Karnataka - Case 1</h4>
                  <p className="text-white/60">Karnataka</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Karnataka - Case 2</h4>
                  <p className="text-white/60">Karnataka</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Karnataka - Case 3</h4>
                  <p className="text-white/60">Karnataka</p>
                </div>
              </div>
            </div>

            {/* Kerala */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Kerala</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Kerala - Case 1</h4>
                  <p className="text-white/60">Kerala</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Kerala - Case 2</h4>
                  <p className="text-white/60">Kerala</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Kerala - Case 3</h4>
                  <p className="text-white/60">Kerala</p>
                </div>
              </div>
            </div>

            {/* Assam */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Assam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Assam - Case 1</h4>
                  <p className="text-white/60">Assam</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Assam - Case 2</h4>
                  <p className="text-white/60">Assam</p>
                </div>
              </div>
            </div>

            {/* Maharashtra */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Maharashtra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Maharashtra - Case 1</h4>
                  <p className="text-white/60">Maharashtra</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Maharashtra - Case 2</h4>
                  <p className="text-white/60">Maharashtra</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Maharashtra - Case 3</h4>
                  <p className="text-white/60">Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Madhya Pradesh */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Madhya Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Madhya Pradesh - Case 1</h4>
                  <p className="text-white/60">Madhya Pradesh</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Madhya Pradesh - Case 2</h4>
                  <p className="text-white/60">Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Odisha */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Odisha</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Odisha - Case 1</h4>
                  <p className="text-white/60">Odisha</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Odisha - Case 2</h4>
                  <p className="text-white/60">Odisha</p>
                  <p className="text-red-400 text-sm mt-2">Video Not Available</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Odisha - Case 3</h4>
                  <p className="text-white/60">Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: International */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: International
            </h2>
            
            {/* China */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">China</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in China</h4>
                  <p className="text-white/60">China</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in China - Case 2</h4>
                  <p className="text-white/60">China</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in China - Case 3</h4>
                  <p className="text-white/60">China</p>
                </div>
              </div>
            </div>

            {/* Sri Lanka */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Sri Lanka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Sri Lanka - Case 1</h4>
                  <p className="text-white/60">Sri Lanka</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Sri Lanka - Case 2</h4>
                  <p className="text-white/60">Sri Lanka</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Sri Lanka - Case 3</h4>
                  <p className="text-white/60">Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Thailand */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Thailand</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Thailand - Case 1</h4>
                  <p className="text-white/60">Thailand</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Thailand - Case 2</h4>
                  <p className="text-white/60">Thailand</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Thailand - Case 3</h4>
                  <p className="text-white/60">Thailand</p>
                </div>
              </div>
            </div>

            {/* Africa */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Africa</h4>
                  <p className="text-white/60">Africa</p>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Human-Rhino Conflicts in Zimbabwe</h4>
                  <p className="text-white/60">Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Solutions & Innovations */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                <h4 className="text-lg font-semibold mb-2">Rhino-Wildlife Conflicts Management in India</h4>
                <p className="text-white/60">Solutions</p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                <h4 className="text-lg font-semibold mb-2">Wildlife Conflict Solutions - India</h4>
                <p className="text-white/60">Solutions</p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg border border-white/20">
                <h4 className="text-lg font-semibold mb-2">Rhino-Wildlife Conflicts in Africa - Solutions</h4>
                <p className="text-white/60">Solutions</p>
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

