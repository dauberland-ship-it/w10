import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, User, ArrowRight, AlertTriangle, Home, Wrench, Shield } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Dépannage de toiture : quand faut-il appeler un couvreur en urgence ?",
      excerpt: "Les signes qui ne trompent pas pour identifier une urgence toiture et les premiers gestes à adopter en attendant l'intervention.",
      content: `
        <h3>Les signes d'urgence toiture</h3>
        <p>Certains problèmes de toiture nécessitent une intervention immédiate :</p>
        <ul>
          <li><strong>Fuite active :</strong> Eau qui coule à l'intérieur de la maison</li>
          <li><strong>Tuiles cassées ou déplacées :</strong> Après tempête ou chute de neige</li>
          <li><strong>Cheminée dangereuse :</strong> Éléments qui menacent de tomber</li>
          <li><strong>Infiltration d'eau :</strong> Taches d'humidité au plafond</li>
        </ul>
        
        <h3>Que faire en attendant le couvreur ?</h3>
        <p>En cas d'urgence, voici les premiers gestes :</p>
        <ol>
          <li>Sécurisez la zone sous la fuite</li>
          <li>Placez des récipients pour récupérer l'eau</li>
          <li>Évitez de monter sur le toit vous-même</li>
          <li>Contactez immédiatement un couvreur d'urgence</li>
        </ol>
        
        <h3>L'intervention d'urgence URGENCE TOITURE</h3>
        <p>Notre équipe intervient 7j/7 et 24h/24 pour :</p>
        <ul>
          <li>Pose de bâche d'étanchéité temporaire</li>
          <li>Réparation immédiate des fuites</li>
          <li>Sécurisation des éléments dangereux</li>
          <li>Expertise pour assurance</li>
        </ul>
      `,
      author: "Équipe URGENCE TOITURE",
      date: "15 Décembre 2024",
      category: "Urgence",
      image: "./images/intervention_urgence_20260108_094801.png",
      tags: ["urgence", "dépannage", "fuite", "tempête"]
    },
    {
      id: 2,
      title: "Réparation d'infiltration d'eau sur toiture : causes et solutions",
      excerpt: "Comprendre les causes des infiltrations d'eau et les méthodes de réparation durables pour protéger votre habitation.",
      content: `
        <h3>Les principales causes d'infiltration</h3>
        <p>Les infiltrations d'eau peuvent avoir plusieurs origines :</p>
        <ul>
          <li><strong>Tuiles fissurées ou cassées :</strong> Usure naturelle ou impact</li>
          <li><strong>Joints défaillants :</strong> Autour des cheminées, Velux</li>
          <li><strong>Gouttières bouchées :</strong> Débordement et stagnation</li>
          <li><strong>Étanchéité dégradée :</strong> Sur toits terrasses</li>
        </ul>
        
        <h3>Méthodes de détection</h3>
        <p>Nos techniques pour localiser les infiltrations :</p>
        <ol>
          <li>Inspection visuelle complète</li>
          <li>Test à l'eau sous pression</li>
          <li>Caméra thermique si nécessaire</li>
          <li>Vérification de l'étanchéité</li>
        </ol>
        
        <h3>Solutions de réparation</h3>
        <p>Selon le diagnostic, nous proposons :</p>
        <ul>
          <li>Remplacement des tuiles endommagées</li>
          <li>Réfection des joints d'étanchéité</li>
          <li>Nettoyage et réparation gouttières</li>
          <li>Traitement hydrofuge préventif</li>
        </ul>
      `,
      author: "Expert URGENCE TOITURE",
      date: "10 Décembre 2024",
      category: "Réparation",
      image: "./images/toiture_avant_apres_20260108_094801.png",
      tags: ["infiltration", "réparation", "étanchéité", "diagnostic"]
    },
    {
      id: 3,
      title: "Pose de bâche d'étanchéité : solution temporaire efficace",
      excerpt: "La pose de bâche d'étanchéité est une solution d'urgence pour protéger votre habitation en attendant les réparations définitives.",
      content: `
        <h3>Quand poser une bâche d'étanchéité ?</h3>
        <p>La bâche d'étanchéité est nécessaire dans ces situations :</p>
        <ul>
          <li><strong>Après tempête :</strong> Toiture fortement endommagée</li>
          <li><strong>Fuite importante :</strong> En attendant les matériaux</li>
          <li><strong>Chantier en cours :</strong> Protection temporaire</li>
          <li><strong>Urgence hivernale :</strong> Conditions météo défavorables</li>
        </ul>
        
        <h3>Types de bâches utilisées</h3>
        <p>Nous utilisons différents types selon les besoins :</p>
        <ol>
          <li><strong>Bâche PVC :</strong> Résistante et durable</li>
          <li><strong>Bâche polyéthylène :</strong> Solution économique</li>
          <li><strong>Bâche EPDM :</strong> Pour toits plats</li>
          <li><strong>Bâche armée :</strong> Très haute résistance</li>
        </ol>
        
        <h3>Technique de pose professionnelle</h3>
        <p>Notre méthode garantit une protection optimale :</p>
        <ul>
          <li>Fixation avec liteaux cloués</li>
          <li>Recouvrement suffisant sur les bords</li>
          <li>Résistance aux vents forts</li>
          <li>Évacuation de l'eau de pluie</li>
        </ul>
      `,
      author: "Technicien URGENCE TOITURE",
      date: "5 Décembre 2024",
      category: "Technique",
      image: "./images/services_toiture_20260108_094801.png",
      tags: ["bâche", "étanchéité", "temporaire", "protection"]
    },
    {
      id: 4,
      title: "Nettoyage anti-mousse : préserver la longévité de votre toiture",
      excerpt: "Le nettoyage anti-mousse régulier est essentiel pour maintenir l'étanchéité et l'esthétique de votre toiture.",
      content: `
        <h3>Pourquoi nettoyer sa toiture ?</h3>
        <p>Le nettoyage régulier présente plusieurs avantages :</p>
        <ul>
          <li><strong>Prévention des fuites :</strong> Évite la dégradation des matériaux</li>
          <li><strong>Esthétique :</strong> Redonne l'aspect neuf à la toiture</li>
          <li><strong>Longévité :</strong> Prolonge la durée de vie des tuiles</li>
          <li><strong>Valeur immobilière :</strong> Maintient la valeur du bien</li>
        </ul>
        
        <h3>Fréquence recommandée</h3>
        <p>Selon le type de toiture et l'exposition :</p>
        <ol>
          <li><strong>Toiture exposée Nord :</strong> Tous les 2-3 ans</li>
          <li><strong>Toiture sous arbres :</strong> Tous les 2 ans</li>
          <li><strong>Toiture exposée Sud :</strong> Tous les 4-5 ans</li>
          <li><strong>Région humide :</strong> Plus fréquent</li>
        </ol>
        
        <h3>Notre méthode de nettoyage</h3>
        <p>Processus professionnel en plusieurs étapes :</p>
        <ul>
          <li>Brossage minutieux des tuiles</li>
          <li>Nettoyage haute pression adaptée</li>
          <li>Traitement anti-mousse préventif</li>
          <li>Application hydrofuge si nécessaire</li>
        </ul>
      `,
      author: "Spécialiste URGENCE TOITURE",
      date: "1er Décembre 2024",
      category: "Entretien",
      image: "./images/urgence_toiture_hero_20260108_094801.png",
      tags: ["nettoyage", "anti-mousse", "entretien", "prévention"]
    },
    {
      id: 5,
      title: "Vérification de toiture : l'importance du diagnostic préventif",
      excerpt: "Un diagnostic régulier de votre toiture permet d'anticiper les problèmes et d'éviter les réparations coûteuses.",
      content: `
        <h3>Pourquoi faire vérifier sa toiture ?</h3>
        <p>La vérification préventive permet de :</p>
        <ul>
          <li><strong>Détecter les problèmes :</strong> Avant qu'ils ne s'aggravent</li>
          <li><strong>Économiser :</strong> Éviter les réparations d'urgence</li>
          <li><strong>Planifier :</strong> Prévoir les travaux nécessaires</li>
          <li><strong>Assurer :</strong> Maintenir les garanties</li>
        </ul>
        
        <h3>Points de contrôle essentiels</h3>
        <p>Notre inspection complète vérifie :</p>
        <ol>
          <li><strong>État des tuiles :</strong> Fissures, déplacements</li>
          <li><strong>Étanchéité :</strong> Joints, solins, noues</li>
          <li><strong>Charpente :</strong> Solidité, parasites</li>
          <li><strong>Évacuation :</strong> Gouttières, descentes</li>
          <li><strong>Isolation :</strong> Performance thermique</li>
        </ol>
        
        <h3>Rapport détaillé</h3>
        <p>À l'issue de la vérification, vous recevez :</p>
        <ul>
          <li>Rapport photographique complet</li>
          <li>Diagnostic de l'état général</li>
          <li>Recommandations d'entretien</li>
          <li>Devis pour travaux si nécessaire</li>
        </ul>
      `,
      author: "Expert URGENCE TOITURE",
      date: "25 Novembre 2024",
      category: "Diagnostic",
      image: "./images/equipe_urgence_toiture_20260108_094803.png",
      tags: ["vérification", "diagnostic", "prévention", "inspection"]
    }
  ];

  const categories = ["Tous", "Urgence", "Réparation", "Technique", "Entretien", "Diagnostic"];

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
            Blog <span className="text-yellow-300">Couverture</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Conseils d'experts, techniques de couverture et actualités du secteur. 
            Plus de 20 ans d'expérience partagés pour vous aider.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={category === "Tous" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article principal */}
            <div className="lg:col-span-2">
              <Card className="card-professional mb-8">
                <div className="relative">
                  <img 
                    src={articles[0].image} 
                    alt={articles[0].title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600">
                    {articles[0].category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{articles[0].title}</CardTitle>
                  <CardDescription className="text-lg">
                    {articles[0].excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: articles[0].content }}
                  />
                  <div className="flex flex-wrap gap-2 mt-6">
                    {articles[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Autres articles */}
              <div className="space-y-8">
                {articles.slice(1).map((article) => (
                  <Card key={article.id} className="card-professional">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover rounded-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-blue-600 text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="md:col-span-2">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                          <CardDescription>
                            {article.excerpt}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-1">
                              {article.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm">
                              Lire la suite
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact urgence */}
              <Card className="card-professional bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Urgence toiture ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">
                    Intervention 7j/7 - 24h/24 pour toutes urgences
                  </p>
                  <Button className="w-full btn-emergency">
                    <Phone className="mr-2 h-4 w-4" />
                    06 45 90 81 24
                  </Button>
                </CardContent>
              </Card>

              {/* Services populaires */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Services populaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Dépannage urgence</p>
                      <p className="text-sm text-gray-600">À partir de 120€</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Rénovation toiture</p>
                      <p className="text-sm text-gray-600">À partir de 45€/m²</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Pose gouttières</p>
                      <p className="text-sm text-gray-600">À partir de 35€/ml</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Vérification toiture</p>
                      <p className="text-sm text-gray-600">Gratuit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone d'intervention */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Zone d'intervention</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Départements :</p>
                      <p className="text-sm text-gray-600">Oise (60), Val d'Oise (95), Yvelines (78)</p>
                    </div>
                    <div>
                      <p className="font-medium">Villes principales :</p>
                      <p className="text-sm text-gray-600">
                        Chantilly, Senlis, Lamorlaye, Gouvieux, Domont, 
                        Montsoult, Fosses, Saint-Maximin...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="card-professional bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4 text-sm">
                    Recevez nos conseils d'entretien et nos actualités
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <Button className="w-full btn-professional">
                      S'abonner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin de conseils personnalisés ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
            sur l'entretien et la réparation de votre toiture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              06 45 90 81 24
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Poser une question
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

export default Blog;