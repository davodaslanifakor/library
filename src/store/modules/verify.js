import router from "~/plugins/router.js";
export default {
  namespaced: true,
  state: () => ({
    client_id: "29",
    redirect_uri: "http://localhost:8080",
    oauthUrl: "http://hiring.bsup.tk/oauth/authorize",
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxZDQ5YWU1YjFjOGIxNGE0ZDY2MjdhZGRkOTEyZDBiYTE1NDgxN2IyMDhkZmU0YTdiYjM4MjdiNjM4MmVlMjcwMDMzZmI5YjIzOWZlZTcyIn0.eyJhdWQiOiIxIiwianRpIjoiNDFkNDlhZTViMWM4YjE0YTRkNjYyN2FkZGQ5MTJkMGJhMTU0ODE3YjIwOGRmZTRhN2JiMzgyN2I2MzgyZWUyNzAwMzNmYjliMjM5ZmVlNzIiLCJpYXQiOjE1NTY1MzIwNTMsIm5iZiI6MTU1NjUzMjA1MywiZXhwIjoxNTg4MTU0NDUzLCJzdWIiOiIzOCIsInNjb3BlcyI6W119.gCh-q4jNd4Vd4FynBkRZAEEeUivU3Lh4dTOAGWSZtrBuLQhbk5QzqxhyENo1BQU5bacDH5s4Fz1mu_GRpIuQL3_l9Q38GFUchhzn7nu5vq7OwmWawOeH7t95c7SewCkBh6LrGCZx0e-tJY5sWXqWU2A2_OnS6MER8dFI-Z6oSxFausr1DtEoaeQRHwXmcYUmUUE8Bz9SLwQ_CuSgLUNMC32u-CUI6EdLV3ZVl1KFuh4KxT2tEIqUt6Y_Tnn2We8ADY_t4J78D0Yol1A6913MJ5LMENYRjp7RsYbzhWsRGAPQAvrHu1WUo_Gl9cC_IsX3alxh1GSJOvzmoYZ8TntMi0ClTMkfo6eTklRJhAdIh4Jc-wWgxhyRwhqIhsArD3IK9_vi9m13g2lumK30RGGDY9Rnchaxgf47f8Pa9BaDbaTtPAqid2x_l8kGbjcIhwijOTdw9c7iJ2mRpSHR2IHXbUrP-o5rF3vGVjJqRMBv45_K6GzwzrUr_M-cos3tgn75pn6W92KyW8Rh60o9lUnn3jnL6D3I0tSYMaGDQhoJoMm-NUGVkMrapgKRpCCc3eyZtFuddsbNgSCI3hU5SMrpaS5XbwE6MflsLdcBABobepBcTWekgjWJcpdevAzEdJE9PSBEQASgUqkyamWzXtD-5XkSqYl18XGkWvmcChcDOsc',
    infoUser:null
  }),
  actions: {
    async getToken({ state }) {
      window.location = `${state.oauthUrl}?client_id=${state.client_id}&redirect_uri=${state.redirect_uri}&response_type=token&scope=`
    },
    seToken({ state }, payload) {
      if(localStorage.getItem('user')) return 
      var hash = payload.substring(1);
      var params = {}
      hash.split('&').map(hk => { 
        let temp = hk.split('='); 
          params[temp[0]] = temp[1] 
      });
      state.infoUser = params
      localStorage.setItem('user',JSON.stringify(params))
      router.push('/list')
    }
  }
};
