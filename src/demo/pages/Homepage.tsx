import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainHomepage from './MainHomepage'

export default function Homepage() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <MainHomepage />
        <FooterFlex />
      </div>
    </>
  )
}
