export default function SafeAuraLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              SafeAura
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              Une application de sécurité urbaine qui aide les utilisateurs à
              mieux anticiper les situations à risque grâce à des alertes en
              temps réel, des itinéraires sécurisés et un système visuel simple.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Découvrir l'application
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition">
                Voir les fonctionnalités
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Niveau de sécurité</h2>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-100 rounded-2xl">
                  <p className="font-semibold">Zone sécurisée</p>
                  <p className="text-sm text-gray-700">
                    Rue principale — activité normale
                  </p>
                </div>

                <div className="p-4 bg-yellow-100 rounded-2xl">
                  <p className="font-semibold">Vigilance recommandée</p>
                  <p className="text-sm text-gray-700">
                    Zone peu fréquentée après 22h
                  </p>
                </div>

                <div className="p-4 bg-red-100 rounded-2xl">
                  <p className="font-semibold">Alerte</p>
                  <p className="text-sm text-gray-700">
                    Activité inhabituelle signalée récemment
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 bg-red-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-red-700 transition">
                SOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Fonctionnalités principales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-semibold mb-3">
                Aura de sécurité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visualisez rapidement le niveau de sécurité d'une zone grâce à
                un système de couleurs intuitif.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-semibold mb-3">
                Partage de localisation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Envoyez votre position en temps réel à vos proches lors de vos
                déplacements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-semibold mb-3">
                Alertes en temps réel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recevez des notifications concernant certaines zones à risque ou
                événements signalés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UX Research Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Une approche centrée utilisateur
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            SafeAura a été conçu à partir de recherches utilisateurs comprenant
            des questionnaires, des analyses qualitatives et des scénarios
            d’utilisation. Les résultats montrent un besoin important de
            prévention, de réassurance et d’assistance rapide dans les
            déplacements quotidiens.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Positionnement de SafeAura
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4 text-left">Application</th>
                  <th className="p-4 text-left">Fonction principale</th>
                  <th className="p-4 text-left">Approche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">EchoSOS</td>
                  <td className="p-4">Appels d'urgence</td>
                  <td className="p-4">Réaction immédiate</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Rega</td>
                  <td className="p-4">Secours médicaux</td>
                  <td className="p-4">Urgences spécialisées</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Alertswiss</td>
                  <td className="p-4">Alertes officielles</td>
                  <td className="p-4">Prévention collective</td>
                </tr>
                <tr className="bg-cyan-50">
                  <td className="p-4 font-semibold">SafeAura</td>
                  <td className="p-4">Sécurité quotidienne</td>
                  <td className="p-4">Prévention et accompagnement urbain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10 px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">SafeAura</h3>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Projet UX / Interaction Design consacré à la sécurité urbaine, à la
          prévention et à l’assistance dans les déplacements quotidiens.
        </p>
      </footer>
    </div>
  );
}
