
export const homeHandler = {
  pattern: "/",
  func: ({ state }) => {
    state.source.data["/"].isFrontPage = true;
    state.source.data["/"].isArchive = false;
  }
}


export const anunciantesHandler = {
  name: "anunciante",
  priority: 10,
  pattern: "/anunciante/:slug",
  func: async ({ route, params, state, libraries }) => {
    // 1. Get anunciante
    const response = await libraries.source.api.get({
      endpoint: "anunciante",
      params: { slug: params.slug }
    });
    
    // 2. add post to state
    const [post] = await libraries.source.populate({ response, state });    
    
    
    // 3. add route to data
    Object.assign(state.source.data[route], {
      id: post.id,
      type: post.type,
      isAnunciante: true,
      isPostType: true,
    });
  }
}
