import { Component } from 'react';

class SubMenu extends Component {
  constructor(props) {
    super()
    this.state = { activo: false }
    this.item = props.item
    this.itemsMenu = props.itemsSubMenu
  }

  mouseOn = () => {
    if (this.item.isFolder) {
      this.setState({ activo: true })
    }
  }

  mouseOff = () => {
    this.setState({ activo: false })
  }

  render() {
    const nombreTitulo = this.item.name
    const itemsMenu = this.itemsMenu.filter((item) => item.idPadre === this.item.id)     //Lista con los items del nuevo padre 
    const itemsSubMenu = this.itemsMenu.filter((item) => item.idPadre != this.item.id)   //Lista de items que no son hijos del nuevo padre
    return (
      <ul onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOff}>
        <li>
          <a>{nombreTitulo}</a>
          {console.log(itemsMenu)}
          {this.state.activo && itemsMenu.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <SubMenu item={item} itemsSubMenu={itemsSubMenu}/>
                </li>
              </ul>
            )
          })}
        </li>
      </ul>
    )

  }
}
export default SubMenu