import Header from '../Header'
import MenuLeftFixed from '../../page/MenuLeft'
import PfPageD from '../PfPageD'
import FooterAbsolute from '../../page/FooterAbsolute'

export default function Layout() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        <PfPageD />
        <FooterAbsolute />
      </div>
    </>
  )
}
