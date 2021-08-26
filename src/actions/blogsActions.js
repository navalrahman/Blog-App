

export const addBlogs = (blogsName) => {
    console.log("Adding blogs",blogsName)
    return {
        type: 'ADD_BLOGS',
        payload: blogsName
    }
}