import React, { useState } from "react";

interface Animal {
  id: string;
  name: string;
  videoSrc: string;
  description: string;
}

const animals: Animal[] = [
  {
    id: "tiger",
    name: "Tiger",
    videoSrc: "/videos/tiger.mp4",
    description: "Majestic Bengal Tiger in its natural habitat"
  },
  {
    id: "india-gaur",
    name: "India Gaur",
    videoSrc: "/videos/india-gaur.mp4",
    description: "Indian Bison - the largest bovine species"
  },
  {
    id: "lion",
    name: "Lion",
    videoSrc: "/videos/lion.mp4",
    description: "African Lion - the king of the jungle"
  },
  {
    id: "rhino",
    name: "Rhino",
    videoSrc: "/videos/rhino.mp4",
    description: "Indian Rhinoceros - a prehistoric survivor"
  },
  {
    id: "sloth-bear",
    name: "Sloth Bear",
    videoSrc: "/videos/sloth-bear.mp4",
    description: "Sloth Bear - unique bear species of India"
  },
  {
    id: "elephant",
    name: "Elephant",
    videoSrc: "/videos/elephant.mp4",
    description: "Asian Elephant - gentle giants of the forest"
  },
  {
    id: "leopard",
    name: "Leopard",
    videoSrc: "/videos/leopard.mp4",
    description: "Indian Leopard - master of stealth and camouflage"
  }
];

const AnimalVideoSelector = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsVideoLoading(true);
    
    // Simulate video loading
    setTimeout(() => {
      setIsVideoLoading(false);
    }, 1000);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Choose Your Wildlife Experience
      </h2>
      
      {/* Animal Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {animals.map((animal) => (
          <button
            key={animal.id}
            onClick={() => handleAnimalSelect(animal)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              selectedAnimal?.id === animal.id
                ? "border-psyc-orange bg-psyc-orange/20 shadow-lg"
                : "border-white/30 hover:border-psyc-orange/50 bg-black/20 hover:bg-black/40"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">
                {animal.id === "tiger" && ""}
                {animal.id === "india-gaur" && ""}
                {animal.id === "lion" && ""}
                {animal.id === "rhino" && ""}
                {animal.id === "sloth-bear" && ""}
                {animal.id === "elephant" && ""}
                {animal.id === "leopard" && ""}
              </div>
              <h3 className="font-semibold text-white mb-1">{animal.name}</h3>
              <p className="text-xs text-white/70 leading-tight">{animal.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Video Display Section */}
      {selectedAnimal && (
        <div className="bg-black/30 rounded-lg p-6 border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-psyc-orange mb-2">
              {selectedAnimal.name}
            </h3>
            <p className="text-white/80">{selectedAnimal.description}</p>
          </div>
          
          <div className="relative">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-psyc-orange mx-auto mb-4"></div>
                  <p className="text-white">Loading {selectedAnimal.name} video...</p>
                </div>
              </div>
            )}
            
            <video
              controls
              muted
              className="w-full h-full rounded-lg shadow-lg"
              onLoadedData={handleVideoLoad}
              onError={() => setIsVideoLoading(false)}
            >
              <source src={selectedAnimal.videoSrc} type="video/mp4" />
              <div className="p-8 text-center text-white/70">
                <p className="text-lg mb-2">Video not available</p>
                <p className="text-sm">The {selectedAnimal.name.toLowerCase()} video is currently unavailable.</p>
                <p className="text-sm mt-2">Please try another animal or check back later.</p>
              </div>
            </video>
          </div>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setSelectedAnimal(null)}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/30"
            >
              Choose Different Animal
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!selectedAnimal && (
        <div className="text-center text-white/60">
          <p className="text-lg">Select an animal above to watch its wildlife video</p>
          <p className="text-sm mt-2">Each animal has a unique story and habitat to explore</p>
        </div>
      )}
    </div>
  );
};

export default AnimalVideoSelector;

