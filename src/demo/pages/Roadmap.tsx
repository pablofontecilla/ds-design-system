import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainExamples from './MainExamples'
import PfPageD from './PfPageD'

export default function Roadmap() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <div>roadmap</div>
        <MainExamples />
        <FooterFlex />
      </div>
    </>
  )
}
