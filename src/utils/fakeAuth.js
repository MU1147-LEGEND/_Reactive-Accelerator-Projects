export const fakeAuth = {
    isAuthenticated : false,
    login(callback){
        fakeAuth.isAuthenticated = true;
        callback();
    },
    logout(callback){
        fakeAuth.isAuthenticated = false;
        callback();
    }
}