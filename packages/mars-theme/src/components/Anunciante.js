import { connect } from "frontity";

const Anunciante = ({ state, actions, libraries }) => {
  
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  // const post = state.source[data.type][data.id];
  // Get the author.
  // const author = state.source.author[post.author];
  // Get a date for humans.
  // const date = new Date(post.date);
  
  console.log('data', data);
  // console.log('post', post);  
  // console.log('author', author);
  

  return data.isReady ? (
      <div>
        <h2>Teste</h2>
      </div>
  ) : null;
};

export default connect(Anunciante);