import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Rustic Elegance with Modern Minimalism
 * - Profile section with image and biography
 * - Contact information clearly displayed
 * - Professional and warm tone
 */

export default function Contact() {
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
              Contact
            </h1>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <blockquote className="text-center text-xl md:text-2xl text-gray-600 italic font-light max-w-3xl mx-auto">
              "Le cheval a marché aux côtés de l'homme durant des siècles, façonnant le cours de l'histoire ensemble. Nous lui devons beaucoup."
            </blockquote>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:block">
                <img
                  src="/images/handler-with-horse.jpg"
                  alt="Bonnin Daniel avec cheval"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Bonnin Daniel</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Passionné de chevaux depuis son plus jeune âge, Bonnin Daniel est un cavalier confirmé en monte classique et plus particulièrement en monte western. Il possède également son brevet d'atteleur.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Ayant acquis une solide expérience en collaborant avec ses parents au Parc Chevalin de Signy, il a obtenu son papier d'Equigarde au haras national d'Avenches. Après avoir géré une écurie pré-box pendant 10 ans à La Rippe, il a décidé de changer le mode de détention pour se rapprocher des besoins naturels des chevaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Address */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Notre adresse</h3>
                <p className="text-lg text-gray-800 font-semibold leading-relaxed mb-2">
                  ECURIE DE LA CREPELIERE
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  85230 SAINT-GERVAIS, FRANCE
                </p>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Contact</h3>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                  <p className="text-amber-800 font-bold mb-1">Important :</p>
                  <p className="text-amber-700">
                    Afin de répondre au mieux à votre demande nous vous remercions de nous adresser vos commandes par mail à l'adresse <a href="mailto:contact@ecurie-db.com" className="underline font-bold">contact@ecurie-db.com</a>
                  </p>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  Contactez-nous pour tout renseignement concernant notre écurie. Nous vous répondrons au plus vite.
                </p>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Emails :</span>
                    <a
                      href="mailto:contact@ecurie-db.com"
                      className="text-xl font-bold text-primary hover:underline transition-all"
                    >
                      contact@ecurie-db.com
                    </a>
                    <a
                      href="mailto:bonnin.d@ecurie-db.com"
                      className="text-xl font-bold text-primary hover:underline transition-all"
                    >
                      bonnin.d@ecurie-db.com
                    </a>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-500 italic">Uniquement par email (pas de téléphone).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">Localisation</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Carte interactive - ECURIE DE LA CREPELIERE, 85230 SAINT-GERVAIS, FRANCE
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
