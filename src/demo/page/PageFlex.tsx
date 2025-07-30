import Header from '../pages/Header'
import MainFlex from './MainFlex'
import FooterFlex from './FooterFlex'
import MenuLeftFixed from './MenuLeft'

export default function PageFlex() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <MainFlex />
        <FooterFlex />
      </div>
    </>
  )
}
