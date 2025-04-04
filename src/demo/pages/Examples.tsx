import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import MainExamples from './MainExamples'

export default function Examples() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <MainExamples />
        <FooterFlex />
      </div>
    </>
  )
}
