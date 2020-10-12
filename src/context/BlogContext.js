import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogPost":
      return [...state, action.payload];
    // case "addBlogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999999).toString(),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "editBlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => async () => {
  try {
    const response = await jsonServer.get("/blogPost");
    // console.log(response.data);
    dispatch({ type: "getBlogPost", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

const addBlogPost = (dispatch) => async (title, content, callback) => {
  await jsonServer.post("/blogPost", {
    id: Math.floor(Math.random() * 999999).toString(),
    title,
    content,
  });
  // dispatch({ type: "addBlogPost", payload: { title, content } });
  if (callback) {
    callback();
  }
};

const editBlogPost = (dispatch) => async (id, title, content, callback) => {
  await jsonServer.put(`/blogPost/${id}`, { title, content });
  dispatch({ type: "editBlogPost", payload: { title, content, id } });
  if (callback) {
    callback();
  }
};

const deleteBlogPost = (dispatch) => async (id) => {
  //delete from server
  await jsonServer.delete(`/blogposts/${id}`);
  //delete Locally
  dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
