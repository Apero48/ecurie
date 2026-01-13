import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Rustic Elegance with Modern Minimalism
 * - Clear information hierarchy with sections
 * - Image and text balanced layout
 * - Pricing displayed prominently
 */

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero-horses-sunset.jpg"
            alt="Chevaux au coucher de soleil"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container text-center text-white">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Pension Chevaux
            </h1>
          </div>
        </section>

        {/* Mode de Détention */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Mode de détention</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Les équidés sont détenus en troupeau et en plein air ; une clôture électrifiée et en état délimite les parcelles de pâture.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Ils ont librement accès à des abris, ainsi que plusieurs râteliers à foin à volonté sous filet, bacs d'eau et pierres à sel.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Une zone stabilisée est mise en place autour des places d'affouragement et des abris.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Des arbres et des toiles créant de l'ombrage sont mis à plusieurs endroits comme protection selon la météo.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Les abris sont pourvues d'une litière absorbante qui est maintenue propre. Les crottins sont enlevés régulièrement dans les parcs.
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/stable-facilities.jpg"
                  alt="Installations de l'écurie"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sellerie */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Sellerie</h3>
                <p className="text-gray-600">
                  Un casier pour le matériel, ainsi qu'un porte-couverture.
                </p>
              </div>

              {/* Espace aliments */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Espace aliments</h3>
                <p className="text-gray-600">
                  Si besoin, un bac pour contenir la nourriture (concentré) de l'équidé, ainsi qu'un espace de rangement pour les compléments alimentaires ou médicaments.
                </p>
              </div>

              {/* Rond de longe */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Rond de longe et paddock en herbe</h3>
                <p className="text-gray-600">
                  Un rond de longe en herbe et un paddock en herbe avec du matériel d'entraînement sont mis à disposition et sont ouverts uniquement lorsque le terrain est praticable.
                </p>
              </div>

              {/* Place de pansage */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Place de pansage</h3>
                <p className="text-gray-600">
                  Une douche extérieure et place de pansage intérieure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Autres prestations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">Autres prestations payantes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vermifuges */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Vermifuges</h3>
                <p className="text-gray-600 mb-4">
                  Un suivi complet des vermifuges est effectué par nos soins uniquement, selon le procédé suivant :
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Au mois d'avril et de septembre, une analyse des crottins de tous les équidés est effectuée.</li>
                  <li>• En cas de besoin, le vermifuge adéquat est donné.</li>
                  <li>• En décembre, un vermifuge complet (duo) est donné à tous les chevaux.</li>
                </ul>
                <p className="text-gray-600 mt-4 font-semibold">
                  Cette méthode de vermifugation est une obligation pour tous les équidés détenus dans l'écurie.
                </p>
              </div>

              {/* Nourrissage */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Nourrissage</h3>
                <p className="text-gray-600">
                  Le nourrissage d'aliment au bidon (concentré, complément, etc) peut être fait par nos soins. Le détail des rations et compléments ainsi que les jours choisis doivent être annoncés via l'application mobile de l'écurie.
                </p>
              </div>

              {/* Solarium */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Solarium</h3>
                <p className="text-gray-600">
                  Un solarium en intérieur.
                </p>
              </div>

              {/* Van ou camion */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Van ou camion</h3>
                <p className="text-gray-600">
                  Une place pour un van ou petit camion peut être mise à disposition au prix de 60 € par mois.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-accent text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Tarif pension</h2>
            <p className="text-lg mb-8 font-light">TVA incluse</p>
            <div className="text-6xl font-bold">650 €</div>
            <p className="text-lg mt-4 font-light">par mois</p>
            <div className="mt-12">
              <a href="mailto:contact@ecurie-db.com" className="inline-block px-8 py-3 bg-white text-accent rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Demander plus d'informations
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
