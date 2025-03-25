// import { Provider } from 'react-redux'
import HeaderTop from './Header';
// import { store } from '../state/store'
// import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'
// import Footer from '../layout/Footer'
import { Link } from 'react-router'

export default function NotFoundPage() {
    let body: any = document.querySelector("body");
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width >= 678) {
            body.className = "ds-theme ds-theme--dark";
        } else {
            body.className = "ds-theme ds-theme--dark mobile";
        }
    }, [width, body]);
    

    return (
        <>
            {/* <Provider store={store}>
                <Analytics /> */}
                <HeaderTop />
            {/* </Provider> */}

            <div className="flex-table projects-list">
            <div>404 Not Found</div>
            <br />
            <Link to="/" >Return to homepage</Link>
            </div>
            {/* <Footer/> */}

        </>
    )
}

