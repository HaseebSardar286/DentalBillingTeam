import React from "react";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-5 mt-5 min-vh-100">
      <h1 className="display-4 fw-bold mb-4 text-center">Blog Post</h1>
      <p className="lead text-center">
        This post ({params.slug}) is currently being written. Please check back
        later!
      </p>
    </div>
  );
}
