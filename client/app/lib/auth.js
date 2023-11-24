import  Cookies  from 'js-cookie';

export function setToken(userId, userName) {
    if (typeof window === 'undefined') return;

    Cookies.set('userId', userId);
    Cookies.set('userName', userName);

    window.location.reload();
}

export function getToken() {
    if (typeof window === 'undefined') return;

    const userId = Cookies.get('userId');
    const userName = Cookies.get('userName');

    return { userId, userName };
}


export function removeToken() {
    if (typeof window === 'undefined') return;

    Cookies.remove('userId');
    Cookies.remove('userName');setShowLoginModal(!showLoginModal)

    window.location.reload();
}