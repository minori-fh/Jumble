export default {
	checkAuth: function(){
		return fetch("https://jumbletron.herokuapp.com/auth", {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    });
	},
	handleLogin: function(userData){
		return fetch("https://jumbletron.herokuapp.com/signin", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(userData),
        credentials: 'include',
        mode: 'cors'
      });
	},
	handleSignup: function(userData){
		return fetch("https://jumbletron.herokuapp.com/signup", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(userData),
      credentials: 'include',
      mode: 'cors'
    });
	},
	handlelogout: function(){
		return fetch("https://jumbletron.herokuapp.com/logout", {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    });
	}	
}
