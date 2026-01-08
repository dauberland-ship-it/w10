import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle, AlertTriangle, Wrench, Home, Zap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Dépannage d'urgence 7j/7",
      description: "Intervention rapide 24h/24 pour fuites, tempêtes, infiltrations",
      price: "À partir de 120€"
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Rénovation de toiture",
      description: "Réfection complète, remplacement tuiles, ardoises, zinc",
      price: "À partir de 45€/m²"
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Pose de gouttières",
      description: "Installation et remplacement gouttières PVC, alu, zinc",
      price: "À partir de 35€/ml"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Isolation projetée",
      description: "Isolation thermique par l'extérieur et combles",
      price: "À partir de 25€/m²"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Nettoyage anti-mousse",
      description: "Démoussage, traitement hydrofuge, entretien toiture",
      price: "À partir de 15€/m²"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-600" />,
      title: "Vérification toiture",
      description: "Diagnostic complet, expertise, devis gratuit",
      price: "Gratuit"
    }
  ];

  const cities = [
    "Gouvieux", "Lamorlaye", "Chantilly", "Domont", "Montsoult", "Fosses", 
    "Senlis", "Saint-Maximin", "St Brice", "Seugy", "Luzarches", 
    "St Martin du Tertre", "Saint-Leu-d'Esserent", "Montataire", 
    "Thiverny", "Chambly", "L'Isle Adam"
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      city: "Chantilly",
      rating: 5,
      comment: "Intervention très rapide après la tempête. Équipe professionnelle et tarifs corrects."
    },
    {
      name: "Pierre Martin",
      city: "Senlis", 
      rating: 5,
      comment: "Excellent travail de rénovation. Plus de 20 ans d'expérience, ça se voit !"
    },
    {
      name: "Sophie Leroy",
      city: "Lamorlaye",
      rating: 5,
      comment: "Dépannage d'urgence un dimanche. Très réactifs et efficaces."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gradient-emergency hover:opacity-80">
                URGENCE TOITURE
              </Link>
              <Badge variant="destructive" className="bg-red-600">
                20 ans d'expérience
              </Badge>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">
                Accueil
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium">
                Services
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium">
                Contact
              </Link>
            </nav>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-red-600" />
                <a href="tel:0645908124" className="font-semibold text-red-600 hover:text-red-700">
                  06 45 90 81 24
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:urgence.toiture.pro@gmail.com" className="text-blue-600 hover:text-blue-700">
                  urgence.toiture.pro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Couvreur spécialisé en
                <span className="block text-yellow-300">"urgence toiture"</span>
                depuis 20 ans
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Dépannage de toiture en urgence 7j/7 • Réparation fuite de toit • 
                Pose de bâche • Intervention après tempête, pluie diluvienne, chute de neige
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-emergency text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                  <Mail className="mr-2 h-5 w-5" />
                  Prendre RDV
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="./images/urgence_toiture_hero_20260108_094801.png" 
                alt="Intervention urgence toiture" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos prestations de <span className="text-gradient-emergency">couverture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Travaux de couverture après tempête, pluie diluvienne, chute de neige. 
              Intervention sur cheminée dangereuse, remplacement de tuile cassée.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-professional hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {service.price}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Devis gratuit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zone d'intervention <span className="text-gradient-professional">Val-d'Oise & Oise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous intervenons dans toutes les communes du Val-d'Oise (95) et de l'Oise (60)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-red-600" />
                Villes principales
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2">
                    {city}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Disponibilité
                </h4>
                <p className="text-blue-800">
                  7j/7 de 8h00 à 20h00<br/>
                  <strong>24h/24 en cas de fortes intempéries</strong>
                </p>
              </div>
            </div>
            <div>
              <img 
                src="./images/toiture_avant_apres_20260108_094801.png" 
                alt="Avant/Après rénovation toiture" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Avis de nos <span className="text-gradient-emergency">clients</span>
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 20 ans d'expérience au service des particuliers et professionnels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.city}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une intervention d'urgence ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Notre équipe de couvreurs professionnels intervient rapidement 
            pour tous vos problèmes de toiture dans le Val-d'Oise et l'Oise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              06 45 90 81 24
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient-emergency">
                URGENCE TOITURE
              </h3>
              <p className="text-gray-300 mb-4">
                Couvreur spécialisé en urgence toiture depuis plus de 20 ans. 
                Intervention rapide dans le Val-d'Oise et l'Oise.
              </p>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">Assurance décennale</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nos services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Dépannage urgence 7j/7</li>
                <li>• Réparation fuite de toit</li>
                <li>• Pose de bâche d'étanchéité</li>
                <li>• Nettoyage anti-mousse</li>
                <li>• Pose de gouttières</li>
                <li>• Isolation projetée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:0645908124" className="hover:text-white">
                    06 45 90 81 24
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:urgence.toiture.pro@gmail.com" className="hover:text-white">
                    urgence.toiture.pro@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Val-d'Oise (95) & Oise (60)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 URGENCE TOITURE - Tous droits réservés - urgencetoiture.site</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
