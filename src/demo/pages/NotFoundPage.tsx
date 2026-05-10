import HeaderTop from './Header';
import FooterFlex from '../page/FooterFlex'
import { Link } from 'react-router'
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

