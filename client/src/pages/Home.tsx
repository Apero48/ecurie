import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Rustic Elegance with Modern Minimalism
 * - Hero image as focal point with overlay text
 * - Generous whitespace and clear hierarchy
 * - Alternating text/image layout for visual rhythm
 * - Warm earth tones with cool sky blue accents
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero-horses-sunset.jpg"
            alt="Chevaux au coucher de soleil"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Au plus proche<br />du besoin du cheval
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              Vivez votre passion en toute simplicité et complicité
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Vie en troupeaux dans des grands parcs avec abris
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Cette nouvelle écurie innovante, construite en 1993, est située à SAINT-GERVAIS (85). Il s'agit d'une écurie de loisir, familiale et conviviale ; idéale pour tous cavaliers et chevaux souhaitant profiter pleinement de cette passion en binôme.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Chaque troupeau est détenu dans des grands parcs avec libre accès à trois abris, ainsi que plusieurs râteliers à foin à volonté sur une grande place stabilisée. Toiles ombragées, arbres dans les parcs, haies fourrragères et paddock en herbe complètent les installations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  L'écurie est située au pied de la montagne pour de belles balades en plaine ou en forêt. À l'écoute de vos besoins, consciencieux et dynamiques, nous vous ferons une joie de vous faire visiter.
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/horses-group-pasture.jpg"
                  alt="Groupe de chevaux en pâturage"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Gallery Preview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">Nos installations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="/images/stable-facilities.jpg"
                alt="Installations de l'écurie"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img
                src="/images/horse-portrait.jpg"
                alt="Portrait de cheval"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-12">
              <Link href="/gallery">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                  Voir la galerie complète
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à découvrir notre écurie ?
            </h2>
            <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
              Contactez-nous pour une visite ou pour plus d'informations sur nos services de pension.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-accent rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Nous contacter
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
