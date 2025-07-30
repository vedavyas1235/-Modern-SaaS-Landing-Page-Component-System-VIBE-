import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { 
  ArrowRight,
  Calendar,
  Clock,
  User,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3
} from "lucide-react"

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "All", count: 12 },
    { name: "AI Marketing", count: 5 },
    { name: "Content Strategy", count: 4 },
    { name: "Analytics", count: 3 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 AI Marketing Strategies That Actually Work in 2024",
      excerpt: "Discover the most effective AI-powered marketing strategies that are driving real results for businesses this year.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Marketing",
      image: "/images/Gemini_Generated_Image_wrcriqwrcriqwrcr-1.png",
      featured: true,
      views: "2.5k"
    },
    {
      id: 2,
      title: "How to Create Content That Converts: A Complete Guide",
      excerpt: "Learn the proven techniques for creating content that not only engages your audience but drives conversions.",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Content Strategy",
      image: "/images/Gemini_Generated_Image_93eise93eise93ei.png",
      views: "1.8k"
    },
    {
      id: 3,
      title: "The Future of Marketing Analytics: Predictive Insights",
      excerpt: "Explore how predictive analytics is revolutionizing marketing decision-making and campaign optimization.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Analytics",
      image: "/images/Gemini_Generated_Image_e9svehe9svehe9sv.png",
      views: "1.2k"
    },
    {
      id: 4,
      title: "Building a Successful Marketing Team: Roles and Responsibilities",
      excerpt: "A comprehensive guide to building and managing a high-performing marketing team in the digital age.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Content Strategy",
      image: "/images/Gemini_Generated_Image_y070riy070riy070.png",
      views: "950"
    }
  ]

  const resources = [
    {
      title: "Marketing ROI Calculator",
      description: "Calculate your marketing return on investment with our comprehensive tool",
      type: "Tool",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      title: "Content Calendar Template",
      description: "Free downloadable template to plan and organize your content strategy",
      type: "Template",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "AI Marketing Guide",
      description: "Complete guide to implementing AI in your marketing strategy",
      type: "Guide",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-purple-500"
    },
    {
      title: "Video Tutorial Series",
      description: "Step-by-step video tutorials for mastering ADmyBRAND features",
      type: "Video",
      icon: <Video className="w-6 h-6" />,
      color: "text-orange-500"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="blog" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold">
            Latest{" "}
            <span className="text-gradient-elegant">Insights</span>{" "}
            & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert insights, guides, and resources 
            to help you succeed in the digital marketing landscape.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles and resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Featured Articles
            </h3>
            
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Blog Post Image */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        
                        <p className="text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{post.views} views</span>
                            <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white">
                              Read More
                              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Free Resources
            </h3>
            
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${resource.color}`}>
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{resource.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                          {resource.type === "Video" ? "Watch" : "Download"}
                          {resource.type === "Video" ? (
                            <ExternalLink className="w-3 h-3 ml-1" />
                          ) : (
                            <Download className="w-3 h-3 ml-1" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest marketing insights delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Articles & Resources
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
} 