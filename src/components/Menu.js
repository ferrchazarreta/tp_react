import { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        const { configColor, idFirstNivel, menuItems } = this.props.data

        const subMenuNivelUnoItems = (parentId) => {
            return menuItems.filter((item) => item.idPadre === parentId)
        }

        const renderSubMenu = (subMenuItem) => {
            const getSubMenuItems = subMenuNivelUnoItems(subMenuItem.id);

            return (
                <li key={subMenuItem.id}>
                    <a style={{ backgroundColor: configColor.itemBackground, color: configColor.itemColor }}>
                        {subMenuItem.name}
                    </a>
                    <ul style={{ backgroundColor: configColor.background }} className="subMenuNivelDos">
                        {
                            getSubMenuItems.map((subMenuItemNivel2) => {
                                if (subMenuItem.id === subMenuItemNivel2.idPadre) {
                                    return renderSubMenuNivel2(subMenuItemNivel2);
                                }
                                return null;
                            })
                        }
                    </ul>
                </li>
            )
        }

        const renderSubMenuNivel2 = (subMenuItemNivel2) => {
            const getSubMenuItems = subMenuNivelUnoItems(subMenuItemNivel2.id);

            return (
                <li key={subMenuItemNivel2.id}>
                    <a style={{ backgroundColor: configColor.itemBackground, color: configColor.itemColor }}>
                        {subMenuItemNivel2.name}
                    </a>
                    <ul style={{ backgroundColor: configColor.background }} className="subMenuNivelDos">
                    {
                        getSubMenuItems.map((subMenuItemNivel3) => {
                            if (subMenuItemNivel2.id === subMenuItemNivel3.idPadre) {
                                return renderSubMenu(subMenuItemNivel3);
                            }
                            return null;
                        })
                    }
                    </ul>
                </li>
            )
        }

        const renderMenuItem = (menuItem) => {
            const getSubMenuItems = subMenuNivelUnoItems(menuItem.id);

            return (
                <li key={menuItem.id}>
                    <a style={{ backgroundColor: configColor.itemBackground, color: configColor.itemColor }}>
                        {menuItem.name}
                    </a>
                    <ul style={{ backgroundColor: configColor.background }} className="subMenuNivelUno">
                        {
                            getSubMenuItems.map((subMenuItem) => {
                                if (menuItem.id === subMenuItem.idPadre) {
                                    return renderSubMenu(subMenuItem);
                                }
                                return null;
                            })
                        }
                    </ul>
                    {/* {getSubMenuItems.length > 0 && (
                        <ul style={{ backgroundColor: configColor.itemBackground }} className='subMenuNivelUno'>
                            {getSubMenuItems.map((subMenuItem) => {
                                const nivel2 = subMenuNivelUnoItems(subMenuItem.id)
                                return (
                                    <li key={subMenuItem.id}>
                                        <a style={{ color: configColor.itemColor }} href={`#${subMenuItem.id}`}>
                                            {subMenuItem.name}
                                        </a>
                                        {nivel2.length > 0 && (
                                            <ul style={{ backgroundColor: configColor.itemBackground }} className='subMenuNivelDos'>
                                                {nivel2.map((subMenuNivelDosItem) => {
                                                    return (
                                                        <li key={subMenuItem.id}>
                                                            <a style={{ color: configColor.itemColor }} href={`#${subMenuItem.id}`}>
                                                                {subMenuNivelDosItem.name}
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    )} */}
                </li>
            );
        }



        return (
            <nav >
                <ul style={{ backgroundColor: configColor.background }} className="menu">
                    {menuItems.map((menuItem) => {
                        if (menuItem.idPadre === idFirstNivel) {
                            return renderMenuItem(menuItem);
                        }
                        return null;
                    })}
                </ul>
            </nav>
        )
    }

}


export default Menu;
