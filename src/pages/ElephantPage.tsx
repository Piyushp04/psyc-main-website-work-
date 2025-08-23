import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { problemVideos, africaVideos, solutionsVideos } from "@/data/videoData";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-psyc-orange">
              Elephant
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the gentle giants through our comprehensive elephant video collection
            </p>
          </div>
        </section>

        {/* Elephant Videos - India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Elephant Videos - India
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

        {/* Elephant Videos - International */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Elephant Videos - International
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

            {/* Africa */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Africa</h3>
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
              Elephant Conflict Solutions
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

export default ElephantPage;
