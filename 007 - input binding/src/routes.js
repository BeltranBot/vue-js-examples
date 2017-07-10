import indexBlog from './components/indexBlog.vue'
import addBlog from './components/addBlog.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'

export default [
  { path: '/', component: indexBlog },
  { path: '/add', component: addBlog },
  { path: '/list-blogs', component: listBlogs },
  { path: '/blog/:id', component: singleBlog }
]
