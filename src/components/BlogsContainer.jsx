import React from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const BlogsContainer = (props)=> {
    return (
        <div>
            <BlogForm />
            <BlogList/>
        </div>
    )
}

export default BlogsContainer