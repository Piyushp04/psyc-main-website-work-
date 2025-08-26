import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { leopardProblemVideos, leopardAfricaVideos, conferencesVideos, leopardAIVideos } from "@/data/videoData";
import { extractVideoId } from "@/data/videoData";

const LeopardPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Leopard Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Leopard Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-leopard conflicts worldwide and the evolving solutions to address this critical conservation challenge
            </p>
          </div>
        </section>

        {/* The Problem: India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: India
            </h2>
            
            {/* Maharashtra */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Maharashtra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.maharashtra.map((video, index) => (
                  <VideoCard
                    key={`maharashtra-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Maharashtra"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Madhya Pradesh */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Madhya Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.madhyaPradesh.map((video, index) => (
                  <VideoCard
                    key={`madhyaPradesh-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Madhya Pradesh"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Uttarakhand */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Uttarakhand</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.uttarakhand.map((video, index) => (
                  <VideoCard
                    key={`uttarakhand-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Uttarakhand"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Gujarat */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Gujarat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.gujarat.map((video, index) => (
                  <VideoCard
                    key={`gujarat-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Gujarat"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Rajasthan */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Rajasthan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.rajasthan.map((video, index) => (
                  <VideoCard
                    key={`rajasthan-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Rajasthan"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Himachal Pradesh */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Himachal Pradesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.himachalPradesh.map((video, index) => (
                  <VideoCard
                    key={`himachalPradesh-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Himachal Pradesh"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Karnataka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.karnataka.map((video, index) => (
                  <VideoCard
                    key={`karnataka-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Karnataka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Kerala */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Kerala</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.kerala.map((video, index) => (
                  <VideoCard
                    key={`kerala-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Kerala"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* West Bengal */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">West Bengal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.westBengal.map((video, index) => (
                  <VideoCard
                    key={`westBengal-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="West Bengal"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Assam */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Assam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.india.assam.map((video, index) => (
                  <VideoCard
                    key={`assam-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Assam"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: Other Countries */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: Other Countries
            </h2>
            
            {/* Nepal */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Nepal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.otherCountries.nepal.map((video, index) => (
                  <VideoCard
                    key={`nepal-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Nepal"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Sri Lanka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Sri Lanka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.otherCountries.sriLanka.map((video, index) => (
                  <VideoCard
                    key={`sriLanka-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Sri Lanka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Bhutan */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Bhutan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.otherCountries.bhutan.map((video, index) => (
                  <VideoCard
                    key={`bhutan-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Bhutan"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Bangladesh */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Bangladesh</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.otherCountries.bangladesh.map((video, index) => (
                  <VideoCard
                    key={`bangladesh-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Bangladesh"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Pakistan */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Pakistan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardProblemVideos.otherCountries.pakistan.map((video, index) => (
                  <VideoCard
                    key={`pakistan-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Pakistan"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
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
                {leopardAfricaVideos.kenya.map((video, index) => (
                  <VideoCard
                    key={`kenya-${index}`}
                    videoId={extractVideoId(video.url)}
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
                {leopardAfricaVideos.tanzania.map((video, index) => (
                  <VideoCard
                    key={`tanzania-${index}`}
                    videoId={extractVideoId(video.url)}
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
                {leopardAfricaVideos.southAfrica.map((video, index) => (
                  <VideoCard
                    key={`southAfrica-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="South Africa"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Namibia */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Namibia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardAfricaVideos.namibia.map((video, index) => (
                  <VideoCard
                    key={`namibia-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Namibia"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Botswana */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Botswana</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardAfricaVideos.botswana.map((video, index) => (
                  <VideoCard
                    key={`botswana-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Botswana"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Zimbabwe */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Zimbabwe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardAfricaVideos.zimbabwe.map((video, index) => (
                  <VideoCard
                    key={`zimbabwe-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Zimbabwe"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Uganda */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Uganda</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardAfricaVideos.uganda.map((video, index) => (
                  <VideoCard
                    key={`uganda-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Uganda"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Ethiopia */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Ethiopia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leopardAfricaVideos.ethiopia.map((video, index) => (
                  <VideoCard
                    key={`ethiopia-${index}`}
                    videoId={extractVideoId(video.url)}
                    title={video.title}
                    region="Ethiopia"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leopard Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Leopard
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="leopard-solution-1"
                videoId="u9TBpGxgEvA"
                title="Leopard Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="leopard-solution-2"
                videoId="EINDLAsp3EM"
                title="Leopard Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="leopard-solution-3"
                videoId="x3sTWcK0O8w"
                title="Leopard Conflict Resolution - Case 3"
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

export default LeopardPage;
