// import { Provider } from 'react-redux'
import HeaderTop from './Header';
// import { store } from '../state/store'
// import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'
import FooterFlex from '../page/FooterFlex'
import { Link } from 'react-router'
import DsIcon from '../components/icons/DsIcon';

export default function NotFoundPage() {
    
    

    return (
        <>

                <HeaderTop />

            <div className="ds-main-ctn">
                <div className="ds-main">
            <div>404 Not Found</div>
            <br />
            <Link to="/" >Return to homepage</Link>
            </div>
            
            </div>
            <FooterFlex/>

        </>
    )
}

