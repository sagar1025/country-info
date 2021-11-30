import {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieName = 'darkmode';

function useDarkMode() {
    const [theme, setTheme] = useState(cookies.get(cookieName) !== 'undefined' && cookies.get(cookieName) > 0 ? 'dark' : 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark', 'light');
        root.classList.add(theme);
    
        cookies.set(cookieName, theme === 'dark' ? 1 : 0, { path: '/' });
    }, [theme]);

    return [theme, setTheme];
}

export default useDarkMode;