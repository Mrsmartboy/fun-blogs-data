import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import Loader from 'react-loader-spinner'
 import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const BlogItemDetails=()=>{
   const [isLoading,setIsLoading] = useState(false)
   const [apiData,setApiData] = useState([])

  const params = useParams();
  const {id}=params 
  
   useEffect(()=>{
      setIsLoading(true)
      const getBlogItemDetails=async ()=>{
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const dataItem = await response.json()
      const updatedData = {
         id: dataItem.id,
         title: dataItem.title,
         imageUrl: dataItem.image_url,
         avatarUrl: dataItem.avatar_url,
         author: dataItem.author,
         topic: dataItem.topic,
       }
       setIsLoading(false)
       setApiData(updatedData)
      }
      getBlogItemDetails()
   },[id])

   const {title,avatarUrl,imageUrl,author}= apiData

   const renderBlogItemDetails=()=>(
  <div className="blog-info">
   <h1 className="title">{title}</h1>
   <div className="image-avatar-container">
      <div className="avatar-container">
         <img src={avatarUrl} alt={`avatarUrl${id}`} className="avatar-url"/>
         <p className="author-para">{author}</p>
      </div>
      <img src={imageUrl} alt={`topic${id}`} className="image-data-details" />
      </div>
  </div>
   )

   

   return(
      <div className="blog-item-details-container">
        {isLoading?<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />:renderBlogItemDetails()}
   </div>
      )

   }

export default BlogItemDetails;