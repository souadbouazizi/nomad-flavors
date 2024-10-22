import React, { useEffect, useState } from 'react';

function ConteurSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const targetValues = [15425, 8705, 14409, 18 ]; // Valeurs cibles pour chaque compteur
  const titles = ["Completed Orders", "Happy Customers", "Home Deliveries", "Years Experience"];

  useEffect(() => {
    const intervals = targetValues.map((target, index) => {
      let count = 0; // Initialiser le compteur à 0
      const interval = setInterval(() => {
        if (count < target) {
          count++;
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = count; // Mettre à jour le compteur correspondant
            return newCounters;
          });
        } else {
          clearInterval(interval); // Arrêter le compteur une fois la cible atteinte
        }
      }, (2000 / target) * 100); // Ajuster l'intervalle pour atteindre la cible en 2 secondes

      return interval; // Renvoyer l'intervalle pour nettoyage
    });

    return () => {
      intervals.forEach(clearInterval); // Nettoyer tous les intervalles à la désinscription
    };
  }, []);

  return (
    <div className="container mx-auto px-4 bg-black py-10">
      <div className="grid grid-cols-4 gap-4">
        {counters.map((count, index) => (
          <div key={index} className=" text-white p-4 shadow-lg text-center">
            <h3 className="text-4xl font-bold">{count}</h3>
             <h2 className="text-lg font-bold mb-2 text-orange-500">{titles[index]}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConteurSection;
