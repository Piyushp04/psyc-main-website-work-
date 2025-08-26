import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { lionVideos, conferencesVideos, lionAIVideos } from "@/data/videoData";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Lion Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-lion conflicts worldwide and the evolving solutions to address this critical conservation challenge
            </p>
          </div>
        </section>

        {/* The Problem: Africa */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: Africa
            </h2>
            
            {/* Kenya */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Kenya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lionVideos.africa.kenya.map((video, index) => (
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

            {/* Tanzania */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Tanzania</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lionVideos.africa.tanzania.map((video, index) => (
                  <VideoCard
                    key={`tanzania-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Tanzania"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* South Africa */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">South Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lionVideos.africa.southAfrica.map((video, index) => (
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

        {/* The Problem: Asia */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: Asia
            </h2>

            {/* India - Gujarat */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">India - Gujarat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lionVideos.asia.india.gujarat.map((video, index) => (
                  <VideoCard
                    key={`gujarat-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Gujarat"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lion Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Lion
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="lion-solution-1"
                videoId="L1QxQq7e6YM"
                title="Lion Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="lion-solution-2"
                videoId="D-pfgrR_dhE"
                title="Lion Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="lion-solution-3"
                videoId="4FuabkML9To"
                title="Lion Conflict Resolution - Case 3"
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

export default LionPage;
