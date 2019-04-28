export default {
  namespaced: true,
  state: () => ({
    client_id: "LnS9tVG3eb801LYdzoDLh9syjKmABbWaE0bgLxCM",
    redirect_uri: "http://localhost",
    oauthUrl: "http://hiring.bsup.tk/oauth/authorize"
  }),
  actions: {
    getToken({ state }) {
      try {
        let res = axios.get(
          `${state.oauthUrl}?client_id=${state.client_id}&redirect_uri=${
            state.redirect_uri
          }&response_type=token`
        );
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
