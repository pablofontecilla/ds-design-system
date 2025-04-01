import Header from '../Header'
// import MainFlex from '../page/MainFlex'
import FooterFlex from '../../page/FooterFlex'
import MenuLeftFixed from '../../page/MenuLeft'
import MainWithSplitter from '../../page/MainWithSplitter'
import MainFlex from '../../page/MainFlex'
import MainLayout from '../MainLayout'
import MainLayoutB from '../MainLayoutB'
import PfPageD from '../PfPageD'
import DsIcon from '../../components/icons/DsIcon'

export default function Layout() {
  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <MenuLeftFixed />
        {/* <MainLayout /> */}
        <PfPageD />

        
        {/* <MainLayoutB /> */}
        <FooterFlex />
       
      </div>
    </>
  )
}
