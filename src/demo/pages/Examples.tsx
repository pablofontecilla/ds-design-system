import Header from './Header'
// import MainFlex from '../page/MainFlex'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainWithSplitter from '../page/MainWithSplitter'
import MainExamples from './MainExamples'

export default function Examples() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        {/* <MainFlex /> */}
        {/* <MainWithSplitter /> */}
        <MainExamples />
        <FooterFlex />
      </div>
    </>
  )
}
