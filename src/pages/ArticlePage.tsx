import { Link, useParams } from 'react-router-dom'
import { getArticle } from '../data/content'
import '../styles/article.css'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticle(slug) : null

  if (!article) {
    return (
      <div className="page container">
        <h1>Article not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <article className="page article-page">
      <header className="article-header">
        <div className="container container--narrow">
          <Link to={`/category/${article.category}`} className="article-category">
            {article.category}
          </Link>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-meta">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {' · '}
            {article.readTime} min read
          </p>
        </div>
      </header>

      <div className="container container--narrow">
        <div className="article-body">
          <p className="article-lead">{article.excerpt}</p>
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="article-body">
          <p>
            More in <Link to={`/category/${article.category}`}>{article.category}</Link> or back to <Link to="/">home</Link>.
          </p>
        </div>
      </div>
    </article>
  )
}
