import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Rustic Elegance with Modern Minimalism
 * - Image-focused layout with asymmetric grid
 * - Generous spacing between images
 * - Hover effects for interactivity
 */

const galleryImages = [
  {
    src: "/images/hero-horses-sunset.jpg",
    alt: "Chevaux au coucher de soleil",
    span: "md:col-span-2",
  },
  {
    src: "/images/horses-group-pasture.jpg",
    alt: "Groupe de chevaux en pâturage",
    span: "",
  },
  {
    src: "/images/stable-facilities.jpg",
    alt: "Installations de l'écurie",
    span: "",
  },
  {
    src: "/images/horse-portrait.jpg",
    alt: "Portrait de cheval",
    span: "md:col-span-2",
  },
  {
    src: "/images/handler-with-horse.jpg",
    alt: "Soigneur avec cheval",
    span: "",
  },
];

export default function Gallery() {
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
              Galerie photos
            </h1>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Vous avez des questions ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour une visite ou pour plus d'informations.
            </p>
            <a href="mailto:contact@ecurie-db.com" className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
