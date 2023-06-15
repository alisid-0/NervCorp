import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap'

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsAPI = await axios.get(`http://localhost:3001/api/blogposts`);
        setPosts(postsAPI.data.reverse());
        console.log(postsAPI.data);
      } catch (err) {
        console.error(err);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <Container className="bg-light rounded text-dark" style={{ boxShadow: "5px 5px 5px 5px rgba(0,0,0,1)" }} key={index}>
          <h1>{post.post_title}</h1>
          <p>{new Date(post.post_date).toLocaleDateString()}</p>
          {post.images && post.images.length > 0 && (
            <div>
              <Carousel>
                {post.images.map((image, i) => (
                  <Carousel.Item key={i}>
                    <img className="d-block w-100" src={image}  />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
          <p>{post.post}</p>
        </Container>
      ))}
    </>
  );
};

function Blog() {
  return (
    <Container className="home-content text-light">
      <h1>Blog</h1>
      <BlogPosts />
    </Container>
  );
}

export default Blog;
