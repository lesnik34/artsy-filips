import {useEffect} from 'react'

export const ScrollToTopOnMount = () => {
    useEffect(() => {
        document.querySelector('.parallax').scrollTo(0, 0);
    }, []);

    return null;
}