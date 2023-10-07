import '../css/blog.scss';

export default function Article({ articleData }) {
  return (
    <a className="article" href={`/blog/${articleData.slug}`}>
        <h2>{ articleData.title }</h2>
        <p>{ articleData.brief }</p>
    </a>
  );
}