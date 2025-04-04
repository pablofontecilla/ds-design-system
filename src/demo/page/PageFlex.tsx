import Header from '../pages/Header'
import MainFlex from './MainFlex'
import FooterFlex from './FooterFlex'
import MenuLeftFixed from './MenuLeft'
import MainWithSplitter from './MainWithSplitter'

export default function Page() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <MainFlex />
        {/* <MainWithSplitter /> */}
        <FooterFlex />
      </div>
    </>
  )
}
