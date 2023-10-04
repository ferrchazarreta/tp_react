import { Component } from 'react';
import './Menu.css';
import SubMenu from './SubMenu';

//menu(menuItems,idFirstNivel) => lista(items.id=idFirstNivel)
//otroMenu(menuItems,idFirstNivel) => lista(items.id!=idFirstNivel)
//SubMenu(otroMenu,items.id)

class Menu extends Component {
    constructor(props) {
        super()
        this.configColor = props.data.configColor
        this.idFirstNivel = props.data.idFirstNivel
        this.menuItems = props.data.menuItems
    }
    
    render() {
        const itemsMenu = this.menuItems.filter((item) => item.idPadre === this.idFirstNivel)     //Lista con los items del padre principal
        const itemsSubMenu = this.menuItems.filter((item) => item.idPadre != this.idFirstNivel)   //Lista de items que no son hijos del padre principal

        return (
            <nav>
                <ul>
                    {itemsMenu.map((item,index)=>{
                        return(
                            <li key={index}>
                                <SubMenu item={item} itemsSubMenu={itemsSubMenu}/>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }

}


export default Menu;
