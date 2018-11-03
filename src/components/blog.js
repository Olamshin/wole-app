import React from "react";
import { RichText } from "prismic-reactjs";

function Blog(props) {
  if (props.posts) {
    const posts = props.posts;
    console.log(posts);
    var postobjects = posts.map(function(post, index) {
      return (
        <div key={post.id} style={{ margin: "0 30px" }}>
          <div className="words">
            <h2>{RichText.asText(post.data.title)}</h2>
          </div>
          {post.data.image.url && (
            <img
              className="center img-responsive"
              style={{ height: "300px" }}
              src={post.data.image.url}
              alt={post.data.image.alt}
            />
          )}
          <div className="words">{RichText.render(post.data.content)}</div>
        </div>
      );
    });
    return <div>{postobjects}</div>;
  }
  return <p>Loading Blog....</p>;
}

export default Blog;
