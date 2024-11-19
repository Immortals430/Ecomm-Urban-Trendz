import React from "react";
import ContentLoader from "react-content-loader";

const BlogItem = (props) => (
    <ContentLoader 
    speed={1}
    width={240}
    height={503}
    viewBox="0 0 240 503"
    backgroundColor="grey"
    foregroundColor="#ecebeb"
    {...props}
    style={{margin: "auto", display: "block"}}
  >
   
   <rect x="0" y="0" rx="10" ry="10" width="100%" height="320" />
    <rect x="0" y="340" rx="3" ry="3" width="100%" height="8" /> 
    <rect x="0" y="360" rx="3" ry="3" width="100%" height="8" /> 
    <rect x="0" y="380" rx="3" ry="3" width="100%" height="8" /> 
    <rect x="0" y="400" rx="3" ry="3" width="100%" height="8" /> 

  </ContentLoader>
);

BlogItem.metadata = {
  name: "RJavlonbek",
  github: "RJavlonbek",
  description: "Blog item",
  filename: "BlogItem",
};

export default BlogItem;
