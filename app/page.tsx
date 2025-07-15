"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Target,
  Zap,
  Eye,
  Heart,
  Flame,
  Trophy,
  Star,
  Sword,
  Shield,
  Crown,
  ChevronDown,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react"
import Image from "next/image"
import YouTube from "react-youtube"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function FootballCandidature() {
  // Correction mismatch SSR/Client pour les points animés + gestion volume
  const [dotStyles, setDotStyles] = useState<React.CSSProperties[]>([])
  const [player, setPlayer] = useState<any>(null)
  const [volume, setVolume] = useState(20) // 20% par défaut
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const dots = Array.from({ length: 100 }).map(
      (): React.CSSProperties => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        position: "absolute",
      }),
    )
    setDotStyles(dots)
  }, [])

  // Met à jour le volume du player quand le slider change
  useEffect(() => {
    // Add a check to ensure player and its setVolume method are available
    if (player && typeof player.setVolume === "function") {
      if (isMuted) {
        player.setVolume(0)
      } else {
        player.setVolume(volume)
      }
    }
  }, [volume, player, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const [showIntro, setShowIntro] = useState(true)
  const [audioStarted, setAudioStarted] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!showIntro) {
      setIsVisible(true)
    }
  }, [showIntro])

  const startExperience = () => {
    setShowIntro(false)
    setAudioStarted(true)
  }

  const physicalStats = [
    { name: "Vitesse", value: 96, color: "bg-green-500", icon: <Zap className="w-4 h-4" /> },
    { name: "Technique", value: 88, color: "bg-blue-500", icon: <Star className="w-4 h-4" /> },
    { name: "Tir", value: 82, color: "bg-red-500", icon: <Target className="w-4 h-4" /> },
    { name: "Dribble", value: 98, color: "bg-yellow-500", icon: <Eye className="w-4 h-4" /> },
    { name: "Physique", value: 78, color: "bg-purple-500", icon: <Shield className="w-4 h-4" /> },
    { name: "Intelligence", value: 95, color: "bg-orange-500", icon: <Crown className="w-4 h-4" /> },
  ]

  const techniques = [
    {
      name: "Samba Dribble",
      description:
        "Une série de dribbles fluides inspirés de la samba, créant un rythme hypnotique qui désoriente les défenseurs.",
      type: "Technique de Dribble",
      icon: <Eye className="w-5 h-5" />,
      power: 98,
    },
    {
      name: "Lightning Speed",
      description:
        "Accélération explosive combinée à un contrôle de balle parfait, permettant de dépasser n'importe quel défenseur.",
      type: "Technique de Vitesse",
      icon: <Zap className="w-5 h-5" />,
      power: 96,
    },
    {
      name: "Genius Vision",
      description:
        "Capacité à lire le jeu 3 coups à l'avance, anticipant les mouvements de tous les joueurs sur le terrain.",
      type: "Technique Mentale",
      icon: <Crown className="w-5 h-5" />,
      power: 95,
    },
  ]

  const storyChapters = [
    {
      title: "Les Favelas de Rio",
      content:
        "Dans les rues étroites de Rocinha, la plus grande favela de Rio de Janeiro, un enfant de 6 ans jongle avec un ballon usé. Gabriel Santos grandit au rythme de la samba et du football de rue, où chaque dribble est une danse, chaque match une bataille pour la survie. Son père, ancien joueur de Flamengo, lui enseigne que le football brésilien coule dans ses veines. 'Meu filho, le football n'est pas qu'un sport, c'est notre âme qui s'exprime', lui répète-t-il chaque soir.",
      emotion: "Passion",
    },
    {
      title: "Le Prodige de la Rue",
      content:
        "À 13 ans, Gabriel développe son style unique : le 'Samba Dribble'. Cette technique révolutionnaire combine les mouvements de danse traditionnelle avec des feintes impossibles. Dans les tournois de rue de Copacabana, il humilie des joueurs de 20 ans avec une facilité déconcertante. Les anciens l'appellent déjà 'O Mágico' - le Magicien. Chaque dribble raconte l'histoire de son peuple, chaque but est un cri de liberté.",
      emotion: "Créativité",
    },
    {
      title: "La Découverte",
      content:
        "Un jour de 2019, lors d'un match de rue près de la plage d'Ipanema, un scout de Flamengo observe ce gamin maigre qui danse avec le ballon. Gabriel marque 7 buts en 20 minutes, dont un où il dribble 8 joueurs d'affilée. Le scout n'en croit pas ses yeux. 'Ce gamin a quelque chose de spécial, quelque chose que l'on ne peut pas enseigner', note-t-il dans son rapport. Trois jours plus tard, Gabriel reçoit l'appel qui va changer sa vie.",
      emotion: "Révélation",
    },
    {
      title: "L'Ascension Professionnelle",
      content:
        "À 15 ans, Gabriel intègre les équipes de jeunes de Flamengo. Son talent explose au grand jour. En 6 mois, il passe des U-17 à l'équipe première. Ses performances contre Palmeiras (2 buts, 3 passes décisives) et São Paulo (triplé en 15 minutes) font sensation. Les médias brésiliens parlent déjà du 'nouveau Pelé'. Jorge Jesus, l'entraîneur, déclare : 'En 30 ans de carrière, je n'ai jamais vu un talent aussi pur.'",
      emotion: "Gloire",
    },
    {
      title: "La Consécration",
      content:
        "Copa Libertadores 2021, finale contre River Plate. Gabriel n'a que 16 ans mais il porte déjà le poids des espoirs de tout un peuple. 78ème minute, score 1-1. Gabriel reçoit le ballon à 40 mètres des buts. Il enchaîne 5 dribbles, élimine le gardien d'une pichenette et marque le but de la victoire. Le Maracanã explose. Ce soir-là, Gabriel Santos devient une légende. Les scouts européens se bousculent déjà à sa porte.",
      emotion: "Légende",
    },
    {
      title: "Le Rêve Européen",
      content:
        "Aujourd'hui, à 17 ans, Gabriel sait que l'Europe l'attend. Paris X Gen, le Real Madrid, Manchester City... tous veulent s'attacher ses services. Mais Gabriel a un rêve plus grand : révolutionner le football européen avec sa magie brésilienne. 'Je ne veux pas juste jouer en Europe, je veux leur montrer ce qu'est le vrai football', confie-t-il. Cette candidature est sa déclaration de guerre au football traditionnel.",
      emotion: "Ambition",
    },
  ]

  const playingStyle = [
    {
      aspect: "Position Préférée",
      description: "Ailier gauche / Milieu offensif / Faux 9",
      details:
        "Gabriel évolue principalement sur l'aile gauche mais peut aussi jouer en milieu de terrain offensif pour orchestrer le jeu. Sa polyvalence lui permet également de dériver au centre en faux 9 pour créer le surnombre.",
    },
    {
      aspect: "Style de Jeu",
      description: "Créateur de magie",
      details:
        "Gabriel transforme chaque action en spectacle. Il privilégie toujours la solution la plus belle à la plus simple, créant des moments de pure poésie footballistique.",
    },
    {
      aspect: "Dribbles",
      description: "Samba dans les pieds",
      details:
        "Ses dribbles suivent le rythme de la samba. Il peut éliminer 3-4 joueurs d'affilée grâce à des feintes de corps impossibles et des changements de rythme soudains.",
    },
    {
      aspect: "Vision de Jeu",
      description: "Génie tactique",
      details:
        "Gabriel voit des passes que personne d'autre ne voit. Il anticipe les mouvements de ses coéquipiers 3 secondes à l'avance et trouve toujours la faille dans la défense adverse.",
    },
    {
      aspect: "Vitesse",
      description: "Éclair brésilien",
      details:
        "Son accélération sur les 20 premiers mètres est fulgurante. Il peut passer de 0 à sa vitesse maximale en 3 foulées, laissant les défenseurs sur place.",
    },
    {
      aspect: "Mentalité",
      description: "Showman né",
      details:
        "Gabriel joue pour le spectacle autant que pour la victoire. Il n'hésite jamais à tenter l'impossible et transforme chaque match en show personnel.",
    },
    {
      aspect: "Polyvalence",
      description: "Maître de plusieurs positions",
      details:
        "Gabriel peut évoluer sur l'aile gauche pour ses dribbles dévastateurs, en milieu offensif pour sa vision de jeu exceptionnelle, ou en faux 9 pour sa capacité à jouer dos au but. Cette polyvalence en fait un joueur imprévisible.",
    },
  ]

  if (showIntro) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/intro-animation.gif"
            alt="Football Background"
            fill
            className="object-cover opacity-60"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Logos */}
        <div className="absolute top-4 left-4 z-30 flex items-center space-x-4 animate-pulse-glow">
          <div className="w-16 h-16 relative">
            <Image src="/blue-lock-logo.png" alt="Blue Lock Logo" fill className="object-contain" />
          </div>
          <div className="text-white text-3xl font-bold">×</div>
          <div className="w-16 h-16 relative">
            <Image src="/paris-xgen-logo.png" alt="Paris X Gen Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-10">
          {/* Correction mismatch SSR/Client : points animés générés côté client uniquement */}
          {dotStyles.length > 0 &&
            dotStyles.map((style, i) => (
              <div key={i} className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse" style={style} />
            ))}
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 mb-4 animate-pulse">
              FOOTBALL
            </h1>
            <div className="w-64 h-2 bg-gradient-to-r from-green-500 to-green-300 mx-auto mb-8 animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-left">CANDIDATURE RP</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-300 mb-12 animate-slide-in-right">
              GABRIEL SANTOS - #15
            </h3>
          </div>

          <div className="animate-bounce-in">
            <Button
              onClick={startExperience}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold px-12 py-6 text-2xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-8 h-8 mr-3" />
              DÉCOUVRIR LE PRODIGE
            </Button>
          </div>

          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="w-8 h-8 text-green-400" />
          </div>
        </div>

        {/* YouTube Audio with volume control */}
        {audioStarted && (
          <>
            <YouTube
              videoId="QMyEEK7_D1Q"
              opts={{
                width: "0",
                height: "0",
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                  playlist: "QMyEEK7_D1Q",
                  mute: 0,
                },
              }}
              onReady={(e) => {
                setPlayer(e.target)
              }}
              className="hidden"
            />
            {/* Slider dans le style Blue Lock */}
            <div className="fixed bottom-6 right-6 z-50 bg-black/80 border-2 border-green-500 p-3 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <button onClick={toggleMute} className="text-green-400 hover:text-green-300 transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <div className="w-24 h-6 relative">
                  <Slider
                    value={[volume]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setVolume(value[0])}
                    className="h-2"
                  />
                </div>
                <span className="text-green-400 text-xs font-mono">{volume}%</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background GIF for entire app */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/intro-animation.gif"
          alt="Football Background"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
      </div>

      {/* Logos */}
      <div className="fixed top-4 left-4 z-30 flex items-center space-x-4 animate-pulse-glow">
        <div className="w-12 h-12 relative">
          <Image src="/blue-lock-logo.png" alt="Blue Lock Logo" fill className="object-contain" />
        </div>
        <div className="text-white text-2xl font-bold">×</div>
        <div className="w-12 h-12 relative">
          <Image src="/paris-xgen-logo.png" alt="Paris X Gen Logo" fill className="object-contain" />
        </div>
      </div>

      {/* YouTube Audio with volume control */}
      {audioStarted && (
        <>
          <YouTube
            videoId="QMyEEK7_D1Q"
            opts={{
              width: "0",
              height: "0",
              playerVars: {
                autoplay: 1,
                loop: 1,
                playlist: "QMyEEK7_D1Q",
                mute: 0,
              },
            }}
            onReady={(e) => {
              setPlayer(e.target)
            }}
            className="hidden"
          />
          {/* Slider dans le style Blue Lock */}
          <div className="fixed bottom-6 right-6 z-50 bg-black/80 border-2 border-green-500 p-3 rounded-lg shadow-lg backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <button onClick={toggleMute} className="text-green-400 hover:text-green-300 transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div className="w-24 h-6 relative">
                <Slider
                  value={[volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0])}
                  className="h-2"
                />
              </div>
              <span className="text-green-400 text-xs font-mono">{volume}%</span>
            </div>
          </div>
        </>
      )}

      <div
        className={`relative z-10 flex-1 flex flex-col transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
              GABRIEL SANTOS
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Badge className="bg-green-600 text-white text-lg px-4 py-2">#15</Badge>
              <Badge className="bg-red-600 text-white text-lg px-4 py-2">ATTAQUANT/MILIEU</Badge>
              <Badge className="bg-blue-600 text-white text-lg px-4 py-2">PROFESSIONNEL</Badge>
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-green-500 to-green-300 mx-auto animate-pulse"></div>
          </div>

          <Tabs defaultValue="identity" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-6 bg-black/80 border-green-500 border-2 mb-8 backdrop-blur-sm animate-fade-in-up">
              <TabsTrigger
                value="identity"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Identité
              </TabsTrigger>
              <TabsTrigger
                value="style"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Style de Jeu
              </TabsTrigger>
              <TabsTrigger
                value="story"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Histoire
              </TabsTrigger>
              <TabsTrigger
                value="stats"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Capacités
              </TabsTrigger>
              <TabsTrigger
                value="techniques"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Techniques
              </TabsTrigger>
              <TabsTrigger
                value="ego"
                className="text-green-400 data-[state=active]:bg-green-600 data-[state=active]:text-black"
              >
                Ego
              </TabsTrigger>
            </TabsList>

            <TabsContent value="identity" className="flex-1">
              <Card className="bg-black/80 border-green-500 border-2 h-full backdrop-blur-sm animate-slide-in-left flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-green-400 flex items-center">
                    <Crown className="w-10 h-10 mr-4 animate-pulse" />
                    PROFIL DU FUTUR ROI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-2" />
                        IDENTITÉ
                      </h3>
                      <div className="space-y-3 text-lg">
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Nom:</span> Gabriel Santos
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Nationalité:</span> Brésil
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Âge:</span> 17 ans
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Taille:</span> 175 cm
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Poids:</span> 65 kg
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Pied fort:</span> Gauche
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Positions:</span> Ailier gauche, Milieu offensif
                        </p>
                        <p className="text-white">
                          <span className="text-green-400 font-bold">Surnom:</span> "O Mágico"
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                        <Target className="w-6 h-6 mr-2" />
                        AMBITIONS
                      </h3>
                      <div className="space-y-3">
                        <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white text-lg px-4 py-2 w-full justify-center">
                          TOP 5 MONDIAL
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg px-4 py-2 w-full justify-center">
                          PARIS X GEN
                        </Badge>
                        <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-lg px-4 py-2 w-full justify-center">
                          BALLON D'OR
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                        <Trophy className="w-6 h-6 mr-2" />
                        PALMARÈS
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-yellow-400">🏆 Copa Libertadores 2021 (Flamengo)</p>
                        <p className="text-yellow-400">⚽ Champion Carioca (Flamengo U-17)</p>
                        <p className="text-yellow-400">🥇 Meilleur buteur Copa Libertadores U-20</p>
                        <p className="text-yellow-400">🇧🇷 Champion des Rues de Rio (U-15)</p>
                        <p className="text-yellow-400">⭐ Sélection équipe nationale U-18</p>
                        <p className="text-yellow-400">🎯 47 buts en 52 matchs (Flamengo)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="style" className="flex-1">
              <Card className="bg-black/80 border-green-500 border-2 h-full backdrop-blur-sm animate-slide-in-right flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-green-400 flex items-center">
                    <Users className="w-10 h-10 mr-4 animate-pulse" />
                    STYLE DE JEU - LA MAGIE BRÉSILIENNE
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="grid md:grid-cols-2 gap-8">
                    {playingStyle.map((style, index) => (
                      <div
                        key={index}
                        className="space-y-4 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <h4 className="text-xl font-bold text-green-300">{style.aspect}</h4>
                        </div>
                        <p className="text-lg font-semibold text-white">{style.description}</p>
                        <p className="text-gray-300 leading-relaxed">{style.details}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-8 bg-gradient-to-r from-transparent via-green-500 to-transparent" />

                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-green-300">SIGNATURE MOVE</h4>
                    <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-6 rounded-lg border border-green-500">
                      <p className="text-xl font-bold text-green-400 mb-2">"La Danse du Diable"</p>
                      <p className="text-gray-300 leading-relaxed">
                        Gabriel reçoit le ballon dos au but, effectue une roulette suivie de deux stepovers, puis
                        accélère brutalement sur son pied gauche en laissant le ballon traîner derrière lui. Cette
                        séquence, inspirée de la capoeira, lui permet d'éliminer jusqu'à 3 défenseurs d'un coup.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="story" className="flex-1">
              <Card className="bg-black/80 border-green-500 border-2 h-full backdrop-blur-sm animate-slide-in-left flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-green-400 flex items-center">
                    <Heart className="w-10 h-10 mr-4 animate-pulse" />
                    L'ODYSSÉE D'UN GÉNIE BRÉSILIEN
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="space-y-8">
                    {storyChapters.map((chapter, index) => (
                      <div
                        key={index}
                        className="relative animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-green-300 mb-2">{chapter.title}</h4>
                            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-purple-700">
                              {chapter.emotion}
                            </Badge>
                            <p className="text-lg leading-relaxed text-gray-300">{chapter.content}</p>
                          </div>
                        </div>
                        {index < storyChapters.length - 1 && (
                          <div className="ml-6 mt-4 w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="flex-1">
              <Card className="bg-black/80 border-green-500 border-2 h-full backdrop-blur-sm animate-slide-in-right flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-green-400 flex items-center">
                    <Zap className="w-10 h-10 mr-4 animate-pulse" />
                    ANALYSE COMPLÈTE DES CAPACITÉS
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      {physicalStats.map((stat, index) => (
                        <div
                          key={index}
                          className="space-y-3 animate-slide-in-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="text-green-400">{stat.icon}</div>
                              <span className="font-bold text-green-300 text-lg">{stat.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-white font-bold text-xl">{stat.value}</span>
                              <span className="text-gray-400">/100</span>
                            </div>
                          </div>
                          <div className="relative">
                            <Progress value={stat.value} className="h-4" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-80 h-80">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Radar chart background */}
                          <polygon
                            points="100,20 173,60 173,140 100,180 27,140 27,60"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="2"
                          />
                          <polygon
                            points="100,50 146,80 146,120 100,150 54,120 54,80"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="1"
                          />
                          {/* Data polygon */}
                          <polygon
                            points="100,28 165,64 165,132 100,172 35,132 35,68"
                            fill="rgba(34, 197, 94, 0.4)"
                            stroke="#22c55e"
                            strokeWidth="3"
                            className="animate-pulse"
                          />
                          {/* Center point */}
                          <circle cx="100" cy="100" r="3" fill="#22c55e" className="animate-pulse" />
                          {/* Labels */}
                          <text x="100" y="15" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            VITESSE
                          </text>
                          <text x="180" y="65" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            TECHNIQUE
                          </text>
                          <text x="180" y="145" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            TIR
                          </text>
                          <text x="100" y="195" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            DRIBBLE
                          </text>
                          <text x="20" y="145" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            PHYSIQUE
                          </text>
                          <text x="20" y="65" textAnchor="middle" className="fill-green-400 text-sm font-bold">
                            INTELLIGENCE
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="techniques" className="flex-1">
              <Card className="bg-black/80 border-green-500 border-2 h-full backdrop-blur-sm animate-slide-in-left flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-green-400 flex items-center">
                    <Sword className="w-10 h-10 mr-4 animate-pulse" />
                    ARSENAL TECHNIQUE
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {techniques.map((technique, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-400 border-2 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="text-green-300 flex items-center text-xl">
                            <div className="text-green-400 animate-pulse">{technique.icon}</div>
                            <span className="ml-3">{technique.name}</span>
                          </CardTitle>
                          <div className="flex space-x-2">
                            <Badge variant="outline" className="border-green-500 text-green-400">
                              {technique.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-300 text-sm leading-relaxed">{technique.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-green-400 font-bold">Puissance</span>
                              <span className="text-white font-bold">{technique.power}/100</span>
                            </div>
                            <Progress value={technique.power} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ego" className="flex-1">
              <Card className="bg-black/80 border-red-500 border-2 h-full backdrop-blur-sm animate-fade-in-up flex flex-col">
                <CardHeader>
                  <CardTitle className="text-4xl text-red-400 flex items-center">
                    <Flame className="w-10 h-10 mr-4 animate-pulse" />
                    L'EGO ABSOLU
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="text-center space-y-8">
                    <div className="relative">
                      <blockquote className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-500 italic leading-tight">
                        "Je ne joue pas pour l'équipe.
                        <br />
                        L'équipe existe pour que je puisse briller.
                        <br />
                        Je suis l'étoile qui transforme les rêves en réalité."
                      </blockquote>
                      <div className="absolute -top-4 -left-4 text-6xl text-red-500/30">"</div>
                      <div className="absolute -bottom-4 -right-4 text-6xl text-red-500/30">"</div>
                    </div>

                    <Separator className="bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
                          <Crown className="w-6 h-6 mr-2" />
                          PHILOSOPHIE DU GÉNIE
                        </h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Ego surdimensionné mais justifié par des résultats exceptionnels
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Obsession maladive de la perfection dans chaque geste technique
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Capacité surnaturelle à élever son niveau sous pression extrême
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Leadership naturel par l'exemple et la domination pure
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
                          <Target className="w-6 h-6 mr-2" />
                          MISSION MONDIALE
                        </h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Conquérir l'Europe avec son style unique
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Développer des techniques révolutionnaires inégalables
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Prouver que la magie brésilienne peut dominer le monde
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">▶</span>
                            Devenir l'icône immortelle de sa génération
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="text-center mt-8 py-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                PRÊT À CONQUÉRIR LE FOOTBALL MONDIAL
              </h2>
              <div className="w-48 h-1 bg-gradient-to-r from-green-500 to-green-300 mx-auto animate-pulse"></div>
              <p className="text-xl text-gray-300 font-semibold">Gabriel Santos - "O Mágico" - La Magie Brésilienne</p>
              <div className="flex justify-center space-x-3 mt-4">
                <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white text-md px-4 py-2">
                  TOP 5 MONDIAL
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-md px-4 py-2">
                  PARIS X GEN
                </Badge>
                <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-md px-4 py-2">
                  FUTUR CHAMPION
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
