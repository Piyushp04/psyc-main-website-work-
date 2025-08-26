import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { tigerVideos, conferencesVideos, tigerAIVideos } from "@/data/videoData";

const TigerPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Tiger Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Tiger Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-tiger conflicts worldwide and the evolving solutions to address this critical conservation challenge
            </p>
          </div>
        </section>

        {/* The Problem: India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: India
            </h2>
            
            {/* Madhya Pradesh */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Madhya Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.india.madhyaPradesh.map((video, index) => (
                  <VideoCard
                    key={`madhyaPradesh-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Madhya Pradesh"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Karnataka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.india.karnataka.map((video, index) => (
                  <VideoCard
                    key={`karnataka-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Karnataka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Assam */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Assam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.india.assam.map((video, index) => (
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

            {/* Uttarakhand */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Uttarakhand</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.india.uttarakhand.map((video, index) => (
                  <VideoCard
                    key={`uttarakhand-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Uttarakhand"
                    isAvailable={true}
                  />
                ))}
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

            {/* Sri Lanka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Sri Lanka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.sriLanka.map((video, index) => (
                  <VideoCard
                    key={`sriLanka-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Sri Lanka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Nepal */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Nepal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tigerVideos.nepal.map((video, index) => (
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
                {tigerVideos.bhutan.map((video, index) => (
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

        {/* Tiger Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Tiger
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="tiger-solution-1"
                videoId="oPNxqjntwUY"
                title="Tiger Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="tiger-solution-2"
                videoId="R9mp8B-Nsdg"
                title="Tiger Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="tiger-solution-3"
                videoId="ksCGH1HZOh8"
                title="Tiger Conflict Resolution - Case 3"
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

export default TigerPage;
