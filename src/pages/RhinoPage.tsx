import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { rhinoVideos, conferencesVideos, rhinoAIVideos } from "@/data/videoData";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Rhino Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-rhino conflicts worldwide and the evolving solutions to address this critical conservation challenge
            </p>
          </div>
        </section>

        {/* The Problem: Asia */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: Asia
            </h2>
            
            {/* India */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">India</h3>
              
              {/* Assam */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-psyc-orange/60">Assam</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rhinoVideos.asia.india.assam.map((video, index) => (
                    <VideoCard
                      key={`assam-${index}`}
                      videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                      title={video.title}
                      region="Assam"
                      isAvailable={true}
                    />
                  ))}
                </div>
              </div>

              {/* West Bengal */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-psyc-orange/60">West Bengal</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rhinoVideos.asia.india.westBengal.map((video, index) => (
                    <VideoCard
                      key={`westBengal-${index}`}
                      videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                      title={video.title}
                      region="West Bengal"
                      isAvailable={true}
                    />
                  ))}
                </div>
              </div>

              {/* Uttar Pradesh */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-psyc-orange/60">Uttar Pradesh</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rhinoVideos.asia.india.uttarPradesh.map((video, index) => (
                    <VideoCard
                      key={`uttarPradesh-${index}`}
                      videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                      title={video.title}
                      region="Uttar Pradesh"
                      isAvailable={true}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Nepal */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Nepal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rhinoVideos.asia.nepal.map((video, index) => (
                  <VideoCard
                    key={`nepal-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Nepal"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Bhutan */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Bhutan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rhinoVideos.asia.bhutan.map((video, index) => (
                  <VideoCard
                    key={`bhutan-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Bhutan"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: Africa */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: Africa
            </h2>
            
            {/* Kenya */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Kenya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rhinoVideos.africa.kenya.map((video, index) => (
                  <VideoCard
                    key={`kenya-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Kenya"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Namibia */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Namibia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rhinoVideos.africa.namibia.map((video, index) => (
                  <VideoCard
                    key={`namibia-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Namibia"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* South Africa */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">South Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rhinoVideos.africa.southAfrica.map((video, index) => (
                  <VideoCard
                    key={`southAfrica-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="South Africa"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rhino Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Rhino
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="rhino-solution-1"
                videoId="cT5TthPFsfs"
                title="Rhino Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="rhino-solution-2"
                videoId="Lbg6MOL_oSg"
                title="Rhino Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="rhino-solution-3"
                videoId="jh88E2aejz0"
                title="Rhino Conflict Resolution - Case 3"
                region="Solutions"
                isAvailable={true}
              />
            </div>
          </div>
        </section>

        {/* Industry Conferences & Discussions Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#fbbf24' }}>
              Industry Conferences & Discussions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferencesVideos.map((video, index) => (
                <VideoCard
                  key={`conference-${index}`}
                  videoId={video.url.replace('https://youtu.be/', '').replace('https://www.youtube.com/live/', '').replace('https://www.youtube.com/watch?v=', '')}
                  title={video.title}
                  region="Conference"
                  isAvailable={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Idea AI Movie Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#fbbf24' }}>
              Our Idea AI Movie
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-full">
                <video 
                  controls
                  muted
                  className="w-full h-full rounded-lg shadow-lg"
                >
                  <source src="/videos/idea.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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


