import { blogData } from '../data/blogData'

export default function BlogGrid() {
  return (
    <section id="blog" className="py-24 max-w-7xl mx-auto px-6 text-center">
      <span className="text-xs font-medium bg-white border border-gray-200 px-3 py-1 rounded-full inline-block mb-4">
        &bull; Blogs
      </span>

      <h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-16">
        Design Insights &amp; Trends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {blogData.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 p-2">
              <div className="flex items-center gap-3">
                <span className="bg-black text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-sm font-medium leading-snug">{post.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}