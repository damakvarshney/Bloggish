import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "./../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      title={title}
      onTitleChange={(title) => setTitle(title)}
      onContentChange={(content) => setContent(content)}
      content={content}
      onPress={() => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreen;
