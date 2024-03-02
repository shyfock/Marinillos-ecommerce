const TOKEN = process.env.REACT_APP_TOKEN;

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function deleteToken() {
    return localStorage.removeItem(TOKEN);
}