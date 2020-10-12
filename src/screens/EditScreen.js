import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import NavigationService from "../context/NavigationService";
import BlogPostForm from "./../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = navigation.getParam("blogPost");
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      title={title}
      onTitleChange={(title) => setTitle(title)}
      onContentChange={(content) => setContent(content)}
      content={content}
      onPress={() => {
        editBlogPost(blogPost.id, title, content, () => {
          NavigationService.replace("Index");
        });
      }}
    />
  );
};

export default EditScreen;
