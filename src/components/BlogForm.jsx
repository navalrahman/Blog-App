import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import  {addBlogs}  from '../actions/blogsActions'


const BlogForm = (props) => {
    const [title, setTitle] = useState('')
    const [body,setBody] = useState('')
    const [name, setName] = useState('')
    const [formError, setFromError] = useState({})

    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        } else if(e.target.name === 'body'){
            setBody(e.target.value)
        } else if(e.target.name === 'name'){
            setName(e.target.value)
        }
    }

    const runValidation = () => {

        if(title.trim().length === 0){
            errors.title = ''
        }if (body.trim().length === 0 ) {
            errors.body = 'This field cannot be left blank'
        }if (name.trim().length === 0){
            errors.name = 'This field cannot be blank'
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length === 0){
            setFromError({})

            const blogData = {
                id: Number(new Date()),
                title: title,
                body:body,
                name:name
            }
            dispatch(addBlogs(blogData))
            console.log(blogData)
            setTitle('')
            setBody('')
            setName('')
        }else {
            setFromError(errors)
        }
    }

    return (
        <div className='blogui'>
            <h2>Add Yours Blogs</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Heading" name="title" value={title} onChange={handleChange}/>
                { formError.title && <span>{formError.title}</span>}
                <br/><br/>
                <textarea type="text" placeholder="Description" name="body" value={body} onChange={handleChange}></textarea>
                { formError.body && <span>{formError.body}</span>}
                <br/><br />
                <input type="text" placeholder="Enter your name" name="name" value={name} onChange={handleChange}/>
                { formError.name && <span>{formError.name}</span>}
                <br /><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default BlogForm