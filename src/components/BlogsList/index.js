import {useState,useEffect} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

const Blogslist=()=>{
    const [isLoading,setIsLoading] = useState(false)
    const [apiData,setApiData] = useState([])

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            
                const response= await fetch('https://apis.ccbp.in/blogs')
                const data = await response.json();
                const updatedData = data.map(eachItem=>({
                    id:eachItem.id,
                    title:eachItem.title,
                    topic:eachItem.topic,
                    author:eachItem.author,
                    avatarUrl:eachItem.avatar_url,
                    imageUrl:eachItem.image_url,

            }))
                setApiData(updatedData)
                setIsLoading(false)

                
            
        }
        fetchData()
    },[])

    return (
        <div className='blog-list-container'>
            {isLoading?<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />:apiData.map(eachBlog=>(<BlogItem key={eachBlog.id} eachBlog={eachBlog} />))}

        </div>

    )

    
}

export default Blogslist