import React from 'react'
import { useSelector} from 'react-redux'
// import BlogCard from './BlogCard'

const BlogList = (props) => {
    

    const blogs = useSelector((state) => {
        return state.blogs
    })

    console.log("Hey==>",blogs)

    return (
        <div>
            {
                blogs.map((ele) => {
                    return (
                        <div>
                            <h1>{`Something`}</h1>
                            <h2>{ele.title}</h2>
                            <p>{ele.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogList