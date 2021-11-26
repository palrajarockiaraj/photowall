import React from "react";
import Photo from "./Photo";

function Photowall(props) {
  const posts = props.posts;
  return (
    <div className="photo-grid">
      {posts.map((post, index) => (
        <Photo key={index} post={post} {...props} index={index} />
      ))}
    </div>
  );
}

export default Photowall;
