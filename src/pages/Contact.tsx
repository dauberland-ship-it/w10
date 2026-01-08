import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    ville: "",
    telephone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer avec un service d'email
    console.log("Formulaire soumis:", formData);
    alert("Votre demande a été envoyée ! Nous vous recontacterons rapidement.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const urgencyTypes = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      title: "Urgence immédiate",
      description: "Fuite active, infiltration en cours",
      action: "Appelez directement",
      phone: "06 45 90 81 24"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Intervention rapide",
      description: "Tuiles cassées, gouttière bouchée",
      action: "Réponse sous 2h",
      phone: "06 45 90 81 24"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Devis travaux",
      description: "Rénovation, entretien planifié",
      action: "Réponse sous 24h",
      phone: "Formulaire ou téléphone"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gradient-emergency">
                URGENCE TOITURE
              </div>
              <Badge variant="destructive" className="bg-red-600">
                20 ans d'expérience
              </Badge>
            </div>
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
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-300">Contactez-nous</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Une question ? Une demande de devis ? Notre entreprise est joignable 7j/7 
            de 8h00 à 20h00 (24h/24 en cas de fortes intempéries).
          </p>
        </div>
      </section>

      {/* Type d'urgence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Quel type d'<span className="text-gradient-emergency">intervention</span> ?
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le niveau d'urgence pour une réponse adaptée
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {urgencyTypes.map((type, index) => (
              <Card key={index} className="card-professional text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {type.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mb-4">
                    {type.action}
                  </Badge>
                  <p className="text-sm text-gray-500">{type.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Demande de <span className="text-gradient-professional">devis</span>
              </h2>
              
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Formulaire de contact</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour recevoir un devis gratuit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium mb-2">
                        Votre nom *
                      </label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Nom et prénom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="ville" className="block text-sm font-medium mb-2">
                        Votre ville *
                      </label>
                      <Input
                        id="ville"
                        name="ville"
                        type="text"
                        required
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Ville d'intervention"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                        Votre téléphone *
                      </label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Votre e-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Votre message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre problème ou vos besoins en travaux..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-professional">
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Nos <span className="text-gradient-emergency">coordonnées</span>
              </h2>
              
              {/* Contact direct */}
              <Card className="card-professional mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-red-600" />
                    Contact direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <a href="tel:0645908124" className="text-red-600 hover:text-red-700 text-lg font-bold">
                        06 45 90 81 24
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <a href="mailto:urgence.toiture.pro@gmail.com" className="text-blue-600 hover:text-blue-700">
                        urgence.toiture.pro@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone d'intervention */}
              <Card className="card-professional mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-green-600" />
                    Zone d'intervention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Départements :</p>
                      <ul className="text-gray-600">
                        <li>• Oise (60)</li>
                        <li>• Val d'Oise (95)</li>
                        <li>• Yvelines (78)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Villes principales :</p>
                      <p className="text-gray-600 text-sm">
                        Gouvieux, Lamorlaye, Chantilly, Domont, Montsoult, Fosses, 
                        Senlis, Saint-Maximin, St Brice, Seugy, Luzarches, 
                        St Martin du Tertre, Saint-Leu-d'Esserent, Montataire, 
                        Thiverny, Chambly, L'Isle Adam
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-purple-600" />
                    Nos horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Accueil téléphonique :</p>
                      <p className="text-gray-600">Du Lundi au Dimanche</p>
                      <p className="text-gray-600">8h00 à 20h00</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800 flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        Urgences
                      </p>
                      <p className="text-red-700">24h/24 en cas de fortes intempéries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-gradient-professional">garanties</span>
            </h2>
            <p className="text-xl text-gray-600">
              Votre tranquillité d'esprit est notre priorité
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Assurance décennale</h3>
              <p className="text-gray-600 text-sm">Couvreur titulaire d'une assurance garantie décennale</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Devis gratuit</h3>
              <p className="text-gray-600 text-sm">Étude et devis offerts, déplacement gratuit</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Disponible 7j/7</h3>
              <p className="text-gray-600 text-sm">Service d'urgence disponible tous les jours</p>
            </div>
            <div className="text-center">
              <Badge className="h-12 w-12 bg-orange-600 text-white mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                20
              </Badge>
              <h3 className="font-semibold mb-2">20 ans d'expérience</h3>
              <p className="text-gray-600 text-sm">Couvreur de confiance depuis 2004</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une urgence toiture ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            N'attendez pas ! Contactez-nous immédiatement pour une intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              06 45 90 81 24
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gradient-emergency">
              URGENCE TOITURE
            </h3>
            <p className="text-gray-300 mb-4">
              Couvreur spécialisé en urgence toiture depuis plus de 20 ans
            </p>
            <p className="text-gray-400">
              &copy; 2024 URGENCE TOITURE - Tous droits réservés - urgencetoiture.site
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;