import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { problemVideos, africaVideos, solutionsVideos, conferencesVideos } from "@/data/videoData";

const ElephantPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Elephant Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Elephant Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-elephant conflicts worldwide and the evolving solutions to address this critical conservation challenge
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
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.karnataka.map((video, index) => (
                  <VideoCard
                    key={`karnataka-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Karnataka"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Kerala */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Kerala</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.kerala.map((video, index) => (
                  <VideoCard
                    key={`kerala-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Kerala"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Assam */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Assam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.assam.map((video, index) => (
                  <VideoCard
                    key={`assam-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Assam"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Maharashtra */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Maharashtra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.maharashtra.map((video, index) => (
                  <VideoCard
                    key={`maharashtra-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Maharashtra"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Madhya Pradesh */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Madhya Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.madhyaPradesh.map((video, index) => (
                  <VideoCard
                    key={`madhyaPradesh-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Madhya Pradesh"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Odisha */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Odisha</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.india.odisha.map((video, index) => (
                  <VideoCard
                    key={`odisha-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Odisha"
                    isAvailable={video.available !== false}
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
            
            {/* China */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">China</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.china.map((video, index) => (
                  <VideoCard
                    key={`china-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="China"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Sri Lanka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Sri Lanka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.sriLanka.map((video, index) => (
                  <VideoCard
                    key={`sriLanka-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Sri Lanka"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Thailand */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Thailand</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemVideos.thailand.map((video, index) => (
                  <VideoCard
                    key={`thailand-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Thailand"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>

            {/* Africa */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {africaVideos.map((video, index) => (
                  <VideoCard
                    key={`africa-${index}`}
                    videoId={video.url.replace('https://youtu.be/', '')}
                    title={video.title}
                    region="Africa"
                    isAvailable={video.available !== false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Elephant Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Elephant
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="elephant-solution-1"
                videoId="oPNxqjntwUY"
                title="Elephant Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="elephant-solution-2"
                videoId="R9mp8B-Nsdg"
                title="Elephant Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="elephant-solution-3"
                videoId="ksCGH1HZOh8"
                title="Elephant Conflict Resolution - Case 3"
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

export default ElephantPage;
