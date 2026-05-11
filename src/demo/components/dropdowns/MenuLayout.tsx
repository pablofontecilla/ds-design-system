import { useState } from 'react'
// import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import CaretDown from '../icons/CaretDown';


// const DropdownListRev = [
//     { key: 1, name: "Bookshelves", url: '/page/bookshelves' },
//     { key: 2, name: "Artwork cabinets", url: '/page/art-cabinets' },
//     { id: 3, name: "Furniture restoration", url: '/page/restoring' },
//     { id: 3, name: "Boxes", url: '/page/boxes' }
// ]



// const list = ["1, 2, 3"];
export default function MenuLayout() {
    // const { t } = useTranslation("global");
    const [activeItem, setActiveItem] = useState<string | number>("");
    // const newLocal = { t(); };
    // const newLocal = t('introPablo.introB');
    // const newLocalB = { newLocal }
    // console.log(newLocal)

    const items = [
        {
            key: 1,
            name: 'splitter',
            url: '/pages/examples'
        },
        {
            key: 2,
            name: 'Scrolling page',
            url: '/pages/scrolling'
        },
        {
            key: 3,
            name: 'Portfolio page',
            url: '/page/art-cabinets'
        },
        {
            key: 4,
            name: 'Test page',
            url: '/demo/pages/test'
        },
        {
            key: 5,
            name: 'Test page2',
            url: './demo/pages/test'
        }
    ];


    return (
    <div className="menu-layout">
        <div className="menu-layout-label">
            <button>
                <CaretDown />
            </button>
            {/* <span>{activeItem !== null ? <span>{activeItem}</span> : <span>Bookshelves</span>}</span> */}
        </div>
        <ul className="menu-list">
            {items.map((item) => (
                <li
                    key={item.key}
                    onClick={() => setActiveItem(item.key)}
                    className={activeItem === item.key ? 'menu-item active' : 'menu-item'}
                >
                    <NavLink to={item.url} reloadDocument>
                        <button>
                            {item.name}
                        </button></NavLink>
                </li>
            ))}
            {/* <span>{t('whoWeAre.p-1')}</span>
            <li><NavLink to='/page/bookshelves' reloadDocument>ddd</NavLink></li>
            <li><NavLink to='/page/art-cabinets' reloadDocument>{t('menu.products')}</NavLink></li>
            <li><NavLink to='/page/boxes' reloadDocument>{t('menu.products')}</NavLink></li>
            <li><NavLink to='/page/restoring' reloadDocument>{t('menu.products')}</NavLink></li>
         */}
        </ul>
    </div>
    );
}


