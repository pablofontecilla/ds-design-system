import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import MenuLeftFixed from '../page/MenuLeft'
import PfPageD from './PfPageD'

export default function Examples() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <PfPageD />
        <FooterFlex />
      </div>
    </>
  )
}
