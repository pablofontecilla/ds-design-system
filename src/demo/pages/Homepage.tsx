import Header from './Header'
// import MainFlex from '../page/MainFlex'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainWithSplitter from '../page/MainWithSplitter'

export default function Homepage() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        {/* <MainFlex /> */}
        <MainWithSplitter />
        <FooterFlex />
      </div>
    </>
  )
}
