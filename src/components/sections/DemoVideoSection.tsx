import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react"

export const DemoVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Create engaging content in seconds with our advanced AI",
      color: "text-purple-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Targeting",
      description: "Reach your ideal audience with precision targeting",
      color: "text-blue-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights and reports",
      color: "text-green-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your marketing team",
      color: "text-orange-500"
    }
  ]

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setShowPlayButton(false)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [features.length])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      const handleEnded = () => {
        setIsPlaying(false)
        setShowPlayButton(true)
      }

      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('ended', handleEnded)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  return (
    <section id="demo" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold">
            See{" "}
            <span className="text-gradient-elegant">ADmyBRAND</span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how our AI-powered platform transforms your marketing workflow. 
            From content creation to campaign optimization, see the magic happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
          {/* Video Player - Takes 2 columns */}
          <div className="relative group lg:col-span-2">
            <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  {/* Video Player */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={handleVideoClick}
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23f1f5f9'/%3E%3C/svg%3E"
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                  >
                    {/* ADmyBRAND Video */}
                    <source src="/videos/ADmyBRAND_Video_Generation_Complete.mp4" type="video/mp4" />
                    <source src="/videos/ADmyBRAND_Video_Generation_Complete.webm" type="video/webm" />
                    <source src="/videos/ADmyBRAND_Video_Generation_Complete.avi" type="video/avi" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay */}
                  {showPlayButton && !isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                      onClick={handleVideoClick}
                    >
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                          <Play className="w-10 h-10 text-primary ml-1" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-2xl font-semibold text-white">Product Demo</h3>
                          <p className="text-white/80 text-lg">Interactive walkthrough of ADmyBRAND features</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={togglePlay}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={toggleFullscreen}
                        className="text-white hover:bg-white/20"
                      >
                        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlights - Takes 1 column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold">
                Powerful Features That{" "}
                <span className="text-gradient-elegant">Drive Results</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Discover how our AI-powered tools can transform your marketing strategy
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 cursor-pointer hover:scale-105 ${
                    currentFeature === index
                      ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                      : "border-border hover:border-primary/30"
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-2">
                      <div className={`p-1.5 rounded-md bg-primary/10 ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-0.5">{feature.title}</h4>
                        <p className="text-muted-foreground text-xs">{feature.description}</p>
                      </div>
                      {currentFeature === index && (
                        <ArrowRight className="w-3 h-3 text-primary animate-pulse" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 