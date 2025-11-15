import { motion } from "framer-motion";
import { MessageCircle, Users, TrendingUp, Clock, ThumbsUp, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityForum = () => {
  const forumCategories = [
    {
      id: 1,
      title: "General Discussion",
      description: "Talk about anything STEM education related",
      posts: 1242,
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Teacher Training",
      description: "Share resources and ask questions about training programs",
      posts: 856,
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Project Showcase",
      description: "Share your students' amazing projects",
      posts: 521,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Get help with kits, software, and installations",
      posts: 387,
      icon: <MessageCircle className="h-5 w-5" />
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Best practices for introducing AI concepts to middle school students?",
      author: "Priya Sharma",
      role: "Grade 8 Teacher",
      replies: 24,
      likes: 42,
      time: "2 hours ago",
      category: "General Discussion"
    },
    {
      id: 2,
      title: "Troubleshooting sensor connectivity issues in Robotics Kit",
      author: "Rajesh Kumar",
      role: "Lab Coordinator",
      replies: 18,
      likes: 31,
      time: "5 hours ago",
      category: "Technical Support"
    },
    {
      id: 3,
      title: "Showcase: Our students' winning project at the state science fair!",
      author: "Anjali Mehta",
      role: "Principal",
      replies: 56,
      likes: 127,
      time: "1 day ago",
      category: "Project Showcase"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Community Forum
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow educators, share experiences, and get support from the L.I.T. Labs community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forum Categories */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Forum Categories</h3>
                <Button>New Topic</Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {forumCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className="border rounded-xl p-5 hover:border-primary transition-colors cursor-pointer"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{category.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{category.posts} posts</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Discussions</h3>
              
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="border-b border-muted pb-6 last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 hover:text-primary cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">{post.author}</span>
                          <span>{post.role}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.time}</span>
                          </div>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Reply className="h-4 w-4" />
                            <span>{post.replies} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">View All Discussions</Button>
              </div>
            </div>
          </div>

          {/* Forum Stats & Quick Actions */}
          <div>
            <div className="bg-card rounded-2xl border p-6 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Community Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Total Members</span>
                  <span className="font-bold">1,248</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Active Today</span>
                  <span className="font-bold">142</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Total Posts</span>
                  <span className="font-bold">5,872</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Solutions</span>
                  <span className="font-bold">1,934</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
              <p className="text-white/90 mb-6">
                Connect with educators across India and share your STEM journey.
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;