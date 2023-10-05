import { Component } from 'react';
import './Menu.css'
import SubMenu from './SubMenu';

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
                <ul className='menu'>
                    {itemsMenu.map((item,index)=>{
                        return(
                            <li key={index} style={{backgroundColor:this.configColor.background}} className='itemMenu' >
                                <SubMenu item={item} itemsSubMenu={itemsSubMenu} configColor={this.configColor}/>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }

}


export default Menu;
