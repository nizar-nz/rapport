import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const RapportEvolution = () => {
  // Données des élèves sur les trois trimestres
  const elevesData = [
    { id: 1, nom: "االء البنا", t1_oral: 16.5, t1_ecrit: 14.0, t2_oral: 16.0, t2_ecrit: 14.0, t3_oral: 19.0, t3_ecrit: 19.25 },
    { id: 2, nom: "االء دعيمش بادة", t1_oral: 12.5, t1_ecrit: 9.75, t2_oral: 15.0, t2_ecrit: 11.5, t3_oral: 13.0, t3_ecrit: 17.25 },
    { id: 3, nom: "اية الصفاء الورغمي", t1_oral: 11.0, t1_ecrit: 16.0, t2_oral: 17.0, t2_ecrit: 14.75, t3_oral: 19.0, t3_ecrit: 16.5 },
    { id: 4, nom: "احمد سويلم", t1_oral: 13.5, t1_ecrit: 10.25, t2_oral: 16.0, t2_ecrit: 13.0, t3_oral: 14.5, t3_ecrit: 17.5 },
    { id: 5, nom: "ايسم الهمامي", t1_oral: 18.0, t1_ecrit: 17.75, t2_oral: 18.0, t2_ecrit: 15.5, t3_oral: 19.5, t3_ecrit: 19.75 },
    { id: 6, nom: "درة البلعزي", t1_oral: 16.5, t1_ecrit: 15.0, t2_oral: 18.0, t2_ecrit: 10.5, t3_oral: 17.0, t3_ecrit: 16.25 },
    { id: 7, nom: "ردينة ابو لعراس", t1_oral: 12.5, t1_ecrit: 12.25, t2_oral: 17.0, t2_ecrit: 10.25, t3_oral: 13.0, t3_ecrit: 13.25 },
    { id: 8, nom: "رقية قاسم", t1_oral: 20.0, t1_ecrit: 15.75, t2_oral: 20.0, t2_ecrit: 19.0, t3_oral: 18.5, t3_ecrit: 19.25 },
    { id: 9, nom: "رنيم الصندلي", t1_oral: 10.0, t1_ecrit: 14.75, t2_oral: 15.0, t2_ecrit: 15.0, t3_oral: 15.5, t3_ecrit: 17.25 },
    { id: 10, nom: "روان بنالشيخ حمودة", t1_oral: 12.0, t1_ecrit: 16.25, t2_oral: 17.0, t2_ecrit: 16.75, t3_oral: 19.5, t3_ecrit: 19.0 },
    { id: 11, nom: "زينب بنالهادي", t1_oral: 15.5, t1_ecrit: 15.25, t2_oral: 17.5, t2_ecrit: 12.25, t3_oral: 17.0, t3_ecrit: 18.25 },
    { id: 12, nom: "شهد النموشي", t1_oral: 12.0, t1_ecrit: 9.25, t2_oral: 17.5, t2_ecrit: 12.75, t3_oral: 16.0, t3_ecrit: 17.5 },
    { id: 13, nom: "شيماء لعريض", t1_oral: 11.0, t1_ecrit: 11.0, t2_oral: 13.0, t2_ecrit: 7.75, t3_oral: 12.0, t3_ecrit: 10.5 },
    { id: 14, nom: "فاطمة الزهراء قدانه", t1_oral: 9.0, t1_ecrit: 15.5, t2_oral: 15.5, t2_ecrit: null, t3_oral: 18.5, t3_ecrit: 17.0 },
    { id: 15, nom: "فاروق فنية", t1_oral: 19.0, t1_ecrit: 16.75, t2_oral: 19.5, t2_ecrit: 19.0, t3_oral: 19.75, t3_ecrit: 19.75 },
    { id: 16, nom: "محمد عزيز حمدان", t1_oral: 14.5, t1_ecrit: 10.75, t2_oral: 14.5, t2_ecrit: 10.25, t3_oral: 13.5, t3_ecrit: 11.75 },
    { id: 17, nom: "محمد قاسم", t1_oral: 9.0, t1_ecrit: 14.0, t2_oral: 15.0, t2_ecrit: 15.0, t3_oral: 19.0, t3_ecrit: 17.5 },
    { id: 18, nom: "محمود الشاطر", t1_oral: 15.5, t1_ecrit: 14.0, t2_oral: 18.5, t2_ecrit: 17.75, t3_oral: 15.0, t3_ecrit: 17.0 },
    { id: 19, nom: "مرام منصري", t1_oral: 10.0, t1_ecrit: 7.0, t2_oral: 12.0, t2_ecrit: 8.0, t3_oral: 13.0, t3_ecrit: 11.0 },
    { id: 20, nom: "مريم الباسطي", t1_oral: 12.0, t1_ecrit: 14.0, t2_oral: 15.0, t2_ecrit: 10.75, t3_oral: 12.0, t3_ecrit: 19.25 },
    { id: 21, nom: "ميس السنوسي", t1_oral: 9.0, t1_ecrit: 12.0, t2_oral: 13.5, t2_ecrit: 9.0, t3_oral: 14.0, t3_ecrit: 13.75 },
    { id: 22, nom: "هبة الله الهمندي", t1_oral: 13.5, t1_ecrit: 15.25, t2_oral: 16.5, t2_ecrit: 16.5, t3_oral: 19.5, t3_ecrit: 20.0 },
    { id: 23, nom: "ياسمين التكروني", t1_oral: 12.5, t1_ecrit: 8.5, t2_oral: 17.0, t2_ecrit: 15.25, t3_oral: 19.5, t3_ecrit: 17.0 },
    { id: 24, nom: "ياسين يوسف العزابي", t1_oral: 14.5, t1_ecrit: 11.25, t2_oral: 18.5, t2_ecrit: 15.0, t3_oral: 15.5, t3_ecrit: 16.25 }
  ];

  // Calcul des moyennes par trimestre
  const calculerMoyennes = () => {
    return elevesData.map(eleve => {
      const moyenneT1 = (eleve.t1_oral + eleve.t1_ecrit) / 2;
      const moyenneT2 = eleve.t2_ecrit === null ? eleve.t2_oral : (eleve.t2_oral + eleve.t2_ecrit) / 2;
      const moyenneT3 = (eleve.t3_oral + eleve.t3_ecrit) / 2;
      const evolution1 = moyenneT2 - moyenneT1;
      const evolution2 = moyenneT3 - moyenneT2;
      const evolutionTotale = moyenneT3 - moyenneT1;
      
      return {
        ...eleve,
        moyenneT1: moyenneT1.toFixed(2),
        moyenneT2: moyenneT2.toFixed(2),
        moyenneT3: moyenneT3.toFixed(2),
        evolution1: evolution1.toFixed(2),
        evolution2: evolution2.toFixed(2),
        evolutionTotale: evolutionTotale.toFixed(2)
      };
    });
  };

  const moyennesEleves = calculerMoyennes();

  // Calcul des moyennes de classe
  const calculerMoyennesClasse = () => {
    let sumT1 = 0, sumT2 = 0, sumT3 = 0;
    let countT1 = 0, countT2 = 0, countT3 = 0;
    
    moyennesEleves.forEach(eleve => {
      sumT1 += parseFloat(eleve.moyenneT1);
      countT1++;
      
      if (eleve.t2_ecrit !== null) {
        sumT2 += parseFloat(eleve.moyenneT2);
        countT2++;
      }
      
      sumT3 += parseFloat(eleve.moyenneT3);
      countT3++;
    });
    
    return {
      moyenneT1: (sumT1 / countT1).toFixed(2),
      moyenneT2: (sumT2 / countT2).toFixed(2),
      moyenneT3: (sumT3 / countT3).toFixed(2)
    };
  };

  const moyennesClasse = calculerMoyennesClasse();

  // Données pour le graphique d'évolution de la classe
  const dataEvolutionClasse = [
    { trimestre: 'Trimestre 1', moyenne: parseFloat(moyennesClasse.moyenneT1) },
    { trimestre: 'Trimestre 2', moyenne: parseFloat(moyennesClasse.moyenneT2) },
    { trimestre: 'Trimestre 3', moyenne: parseFloat(moyennesClasse.moyenneT3) }
  ];

  // Tri des élèves par progression
  const elevesParProgression = [...moyennesEleves].sort((a, b) => 
    parseFloat(b.evolutionTotale) - parseFloat(a.evolutionTotale)
  );

  // État pour suivre l'élève actuellement sélectionné
  const [selectedEleve, setSelectedEleve] = useState(null);
  
  // Données pour le graphique individuel
  const getIndividualChartData = (eleveId) => {
    const eleve = moyennesEleves.find(e => e.id === eleveId);
    if (!eleve) return [];
    
    return [
      { trimestre: 'Trimestre 1', note: parseFloat(eleve.moyenneT1) },
      { trimestre: 'Trimestre 2', note: parseFloat(eleve.moyenneT2) },
      { trimestre: 'Trimestre 3', note: parseFloat(eleve.moyenneT3) }
    ];
  };

  // Classement des élèves par moyenne du trimestre 3
  const classementT3 = [...moyennesEleves].sort((a, b) => 
    parseFloat(b.moyenneT3) - parseFloat(a.moyenneT3)
  );

  return (
    <div className="p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Rapport d'Évolution des Élèves - Année Scolaire 2024/2025</h1>
      <h2 className="text-xl font-bold text-center mb-4">Classe : Quatrième Sciences Expérimentales 1</h2>
      <h3 className="text-lg font-bold text-center mb-8">Matière : Informatique</h3>
      
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-blue-700">1. Analyse Globale de la Classe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Évolution des Moyennes de Classe</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dataEvolutionClasse}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="trimestre" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="moyenne" stroke="#3366cc" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="p-2 bg-blue-50 rounded">
                <p className="font-semibold">Trimestre 1</p>
                <p className="text-lg">{moyennesClasse.moyenneT1}/20</p>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <p className="font-semibold">Trimestre 2</p>
                <p className="text-lg">{moyennesClasse.moyenneT2}/20</p>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <p className="font-semibold">Trimestre 3</p>
                <p className="text-lg">{moyennesClasse.moyenneT3}/20</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Élèves avec la Plus Grande Progression</h3>
            <div className="h-64 overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T1</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T3</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prog.</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {elevesParProgression.slice(0, 5).map((eleve) => (
                    <tr key={eleve.id}>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{eleve.nom}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{eleve.moyenneT1}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{eleve.moyenneT3}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-green-600">+{eleve.evolutionTotale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3">Observations Générales</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>La moyenne de la classe a progressé de {(parseFloat(moyennesClasse.moyenneT3) - parseFloat(moyennesClasse.moyenneT1)).toFixed(2)} points entre le 1er et le 3ème trimestre.</li>
            <li>{moyennesEleves.filter(e => parseFloat(e.evolutionTotale) > 0).length} élèves sur {moyennesEleves.length} ont amélioré leur moyenne entre le début et la fin de l'année.</li>
            <li>{moyennesEleves.filter(e => parseFloat(e.moyenneT3) >= 15).length} élèves ont obtenu une moyenne supérieure ou égale à 15/20 au 3ème trimestre.</li>
            <li>La progression a été particulièrement significative au 3ème trimestre, montrant une préparation sérieuse pour l'examen du baccalauréat.</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-blue-700">2. Analyse Individuelle des Élèves</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Sélectionner un élève</h3>
            <div className="h-96 overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rang</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T1</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T2</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T3</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Évol.</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {classementT3.map((eleve, index) => (
                    <tr 
                      key={eleve.id} 
                      onClick={() => setSelectedEleve(eleve.id)}
                      className={`cursor-pointer hover:bg-blue-50 ${selectedEleve === eleve.id ? 'bg-blue-100' : ''}`}
                    >
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{index + 1}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">{eleve.nom}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{eleve.moyenneT1}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">{eleve.moyenneT2}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">{eleve.moyenneT3}</td>
                      <td className={`px-3 py-2 whitespace-nowrap text-sm font-medium ${parseFloat(eleve.evolutionTotale) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {parseFloat(eleve.evolutionTotale) >= 0 ? '+' : ''}{eleve.evolutionTotale}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {selectedEleve && (
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3">Profil de l'élève: {moyennesEleves.find(e => e.id === selectedEleve)?.nom}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={getIndividualChartData(selectedEleve)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="trimestre" />
                    <YAxis domain={[0, 20]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="note" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              {(() => {
                const eleve = moyennesEleves.find(e => e.id === selectedEleve);
                if (!eleve) return null;
                
                let commentaire = "";
                const moyenne = parseFloat(eleve.moyenneT3);
                const evolution = parseFloat(eleve.evolutionTotale);
                
                if (moyenne >= 18) {
                  commentaire = "Excellent niveau. Continue ainsi!";
                } else if (moyenne >= 15) {
                  commentaire = "Très bon niveau. Persévère dans tes efforts!";
                } else if (moyenne >= 12) {
                  commentaire = "Bon niveau. Continue à progresser!";
                } else if (moyenne >= 10) {
                  commentaire = "Niveau satisfaisant. Redouble d'efforts pour le bac!";
                } else {
                  commentaire = "Des efforts supplémentaires sont nécessaires avant le bac.";
                }
                
                if (evolution >= 3) {
                  commentaire += " Progression remarquable sur l'année!";
                } else if (evolution >= 1) {
                  commentaire += " Bonne progression sur l'année.";
                } else if (evolution < 0) {
                  commentaire += " Attention à la baisse de niveau.";
                }
                
                return (
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="font-medium">Commentaire: {commentaire}</p>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-blue-700">3. Conclusion et Encouragements</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="mb-4">Chers élèves de la Quatrième Sciences Expérimentales 1,</p>
          
          <p className="mb-4">Félicitations pour votre parcours en informatique tout au long de cette année scolaire 2024/2025. Vos résultats témoignent d'une progression constante et d'un travail sérieux.</p>
          
          <p className="mb-4">La majorité d'entre vous a démontré une nette amélioration entre le premier et le troisième trimestre, ce qui est très encourageant à l'approche de l'examen du baccalauréat. Cette progression montre votre capacité à vous adapter et à renforcer vos connaissances au fil du temps.</p>
          
          <p className="mb-4">Le baccalauréat approche à grands pas, mais vous avez déjà prouvé votre sérieux et votre engagement. Gardez confiance en vos capacités et en votre préparation. Continuez à réviser régulièrement, à pratiquer les exercices et à consolider vos connaissances.</p>
          
          <p className="mb-4">Rappelez-vous que les efforts fournis aujourd'hui porteront leurs fruits demain. Chaque heure de travail vous rapproche un peu plus de la réussite.</p>
          
          <p className="font-bold">Je vous souhaite à tous un excellent succès pour votre baccalauréat et un avenir brillant dans vos études supérieures !</p>
          
          <p className="mt-6 text-right">Professeur Nizar Abdellatif</p>
        </div>
      </div>
    </div>
  );
};

export default RapportEvolution;