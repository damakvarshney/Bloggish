import React, { useContext, useState } from "react";

import { Context } from "../context/BlogContext";
import BlogPostForm from "./../component/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <BlogPostForm
      title={title}
      content={content}
      onTitleChange={(title) => setTitle(title)}
      onContentChange={(content) => setContent(content)}
      onPress={() => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default CreateScreen;
