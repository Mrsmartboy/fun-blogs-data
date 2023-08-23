import {Link} from 'react-router-dom'
import './index.css'

const BlogItem =(props)=>{
    const {eachBlog} =props
    const {id,title,topic,author,avatarUrl,imageUrl}= eachBlog 

    return(
  <Link to={`/blogs/${id}`} className='blog-item-link-container'>
        <div className="blog-item-container">
                <img src={imageUrl} alt={`blog${id}`} className='image-url'/>
           
            <div className='blog-data-container'>
            <p className="blog-topic">{topic}</p>

                <h1 className="blog-title">{title}</h1>
                <div className="blog-avatar-container">
                    <img src={avatarUrl} alt={`avatar${id}`} className='avatar-url'/>
                    <p className="blog-author">{author}</p>
                </div>
            </div>

        </div>
        </Link>
    )



}

export default BlogItem