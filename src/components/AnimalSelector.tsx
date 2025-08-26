import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Animal {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

const animals: Animal[] = [
  {
    id: "tiger",
    name: "Tiger",
    emoji: "",
    description: "Majestic Tiger"
  },
  {
    id: "india-gaur",
    name: "Gaur",
    emoji: "",
    description: "Wild Bison"
  },
  {
    id: "lion",
    name: "Lion",
    emoji: "",
    description: "Lion"
  },
  {
    id: "rhino",
    name: "Rhino",
    emoji: "",
    description: "Rhinoceros"
  },
  {
    id: "sloth-bear",
    name: "Sloth Bear",
    emoji: "",
    description: "Sloth Bear"
  },
  {
    id: "elephant",
    name: "Elephant",
    emoji: "",
    description: "Elephant"
  },
  {
    id: "leopard",
    name: "Leopard",
    emoji: "",
    description: "Leopard"
  }
];

const AnimalSelector = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAnimalSelect = (animalId: string) => {
    setSelectedAnimal(animalId);
    
    // Navigate to the appropriate animal page
    switch (animalId) {
      case "tiger":
        navigate("/psyc-defence/tiger");
        break;
      case "india-gaur":
        navigate("/psyc-defence/gaur");
        break;
      case "lion":
        navigate("/psyc-defence/lion");
        break;
      case "rhino":
        navigate("/psyc-defence/rhino");
        break;
      case "sloth-bear":
        navigate("/psyc-defence/sloth-bear");
        break;
      case "elephant":
        navigate("/psyc-defence/elephant");
        break;
      case "leopard":
        navigate("/psyc-defence/leopard");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">

      
      {/* All Animals in Single Horizontal Row */}
      <div className="flex justify-center">
        <div className="grid grid-cols-7 gap-4">
          {animals.map((animal) => (
            <button
              key={animal.id}
              onClick={() => handleAnimalSelect(animal.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                selectedAnimal === animal.id
                  ? "border-psyc-orange bg-psyc-orange/20 shadow-lg scale-105"
                  : "border-white/30 hover:border-psyc-orange/50 bg-black/20 hover:bg-black/40"
              }`}
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl">{animal.emoji}</div>
                  <h3 className="font-bold text-white text-sm">{animal.name}</h3>
                </div>
                <p className="text-white/70 text-xs">{animal.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selection Display */}
      {selectedAnimal && (
        <div className="mt-12 text-center">
          <div className="bg-psyc-orange/20 border border-psyc-orange rounded-lg p-6 inline-block">
            <h3 className="text-2xl font-bold text-psyc-orange mb-2">
              You selected: {animals.find(a => a.id === selectedAnimal)?.name}
            </h3>
            <p className="text-white/80">
              Ready to explore {animals.find(a => a.id === selectedAnimal)?.name} content!
            </p>
            <button
              onClick={() => setSelectedAnimal(null)}
              className="mt-4 px-6 py-2 bg-psyc-orange hover:bg-psyc-orange/90 text-white rounded-lg transition-colors"
            >
              Choose Different Animal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalSelector;
