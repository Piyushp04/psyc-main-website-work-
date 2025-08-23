import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { problemVideos, africaVideos, solutionsVideos } from "@/data/videoData";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-psyc-orange">
              Tiger
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the majestic world of tigers through our curated collection of videos
            </p>
          </div>
        </section>

        {/* Tiger Videos - India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Tiger Videos - India
            </h2>
            
            {/* Karnataka */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Karnataka</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Kerala</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Assam</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Maharashtra</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Madhya Pradesh</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Odisha</h3>
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

        {/* Tiger Videos - International */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Tiger Videos - International
            </h2>
            
            {/* China */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">China</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Sri Lanka</h3>
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Thailand</h3>
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

            {/* Bangladesh */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Bangladesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                    Bengal Tigers in Sundarbans
                  </h3>
                  <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60">Video Placeholder</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Bengal tigers in Sundarbans
                  </p>
                </div>
              </div>
            </div>

            {/* Nepal */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Nepal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                    Tiger Conservation in Nepal
                  </h3>
                  <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60">Video Placeholder</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Tiger conservation in Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Russia */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Russia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-psyc-orange">
                    Siberian Tiger Protection
                  </h3>
                  <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60">Video Placeholder</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Siberian tiger protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiger Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Tiger Conflict Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionsVideos.map((video, index) => (
                <VideoCard
                  key={`solution-${index}`}
                  videoId={video.url.replace('https://youtu.be/', '')}
                  title={video.title}
                  region="Solutions"
                  isAvailable={video.available !== false}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TigerPage;
