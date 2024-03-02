import Cookies from "universal-cookie";

// const host = process.env.REACT_APP_API_URL;
const cookies = new Cookies();

export function calculateSessionExpiration() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession() {
    //console.log(cookies.get('_s') === undefined)
    return cookies.get('_s') === undefined ? false : cookies.get('_s');

}

export function renewSession() {
    const session = getSession();
    if (!session) window.location.href = '/signin';
    cookies.set('_s', session, {
        path: '/',
        expires: calculateSessionExpiration()
    })
    return session;
}
