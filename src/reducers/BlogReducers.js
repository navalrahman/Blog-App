const blogIntialState = []

const BlogReducers = (state = blogIntialState, action) => {
    switch(action.type){
        case 'Add_BLOGS' : {
            return [...state,{...action.payload}]
        }
        default : {
            return [...state]
        }
    }
}

export default BlogReducers