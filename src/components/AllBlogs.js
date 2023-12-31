import React from 'react';
import { Consumer } from '../context';
import BlogCard from './BlogCard';

function AllBlogs() {
  return (
    <Consumer>
        {(value) => {
            const { blogs } = value;
            return(
                <div className='container text-center my-5 py-5'>
                    <h1 className='font-weight-light py-5'>
                        All my <span className='text-info'> Projects</span>
                    </h1>
                    <div className='row my-4 pt-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className="col-12 col-md-6">
                                <BlogCard id = {blog.id} title = {blog.title} body = {blog.body} imageUrl = {blog.imageUrl} />

                            </div>
                        ))}
                    </div>
                </div>
            );
        }}
    </Consumer>
  );
}

export default AllBlogs;