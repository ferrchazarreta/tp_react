import { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        const { background, itemBackground, itemColor, itemActive } = this.props.data.configColor
        const { idFirstNivel, menuItems } = this.props.data

        function subMenu(idFirstNivel,menuItems){
            let itemSecundarios = []
            for (let j = 0; j < menuItems.length; j++) {
                if (idFirstNivel === menuItems[j].idPadre) {
                    itemSecundarios.push(
                        <ul className='subMenuNivelUno'>
                            <li key={j}>
                                <a>{menuItems[j].name}</a>
                            </li>
                        </ul>
                    )
                }
            }
            return(itemSecundarios)
        }

        function menuPrimario(idFirstNivel, menuItems) {
            let itemPrimarios = []
            for (let i = 0; i < menuItems.length; i++) {
                if (menuItems[i].idPadre === idFirstNivel) {
                    itemPrimarios.push(
                        <li key={i}>
                            <a>{menuItems[i].name}</a>
                        </li>)
                    if (menuItems[i].isFolder === true) {
                        subMenu(menuItems[i].id,menuItems)  
                    }
                }
            }
            return (itemPrimarios)
        }

        return (
            <nav>
                <ul className="menu">
                    {menuPrimario(idFirstNivel, menuItems)}
                    {/* <li><a href="#">Inicio</a></li>
                    <li>
                        <a href="#">Servicios</a>
                        <ul className="subMenuNivelUno">
                            <li><a href="#">Diseño web</a></li>
                            <li><a href="#">Desarrollo web</a></li>
                            <li>
                                <a href="#">Marketing digital</a>
                                <ul className="subMenuNivelDos">
                                    <li><a href="#">Prueba 1</a></li>
                                    <li><a href="#">Prueba 2</a></li>
                                    <li><a href="#">Prueba 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Contacto</a></li> */}
                </ul>
            </nav>

        )
    }

}


export default Menu;
