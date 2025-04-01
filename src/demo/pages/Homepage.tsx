import Header from './Header'
// import MainFlex from '../page/MainFlex'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainWithSplitter from '../page/MainWithSplitter'
import MainHomepage from './MainHomepage'

export default function Homepage() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        {/* <MainFlex /> */}
        <MainHomepage />
        <FooterFlex />
      </div>
    </>
  )
}
