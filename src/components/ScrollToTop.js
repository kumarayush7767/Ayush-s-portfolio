/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0);
    },[pathname]);
    return null;
}

export default ScrollToTop;
