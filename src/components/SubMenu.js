import { Component } from 'react';
import './SubMenu.css'
import SubMenuItems from './SubMenuItems';

class SubMenu extends Component {
  constructor(props) {
    super()
    this.state = { activo: false, hover: false }
    this.item = props.item
    this.itemsMenu = props.itemsSubMenu
    this.configColor = props.configColor
  }

  click = () => {
    if (this.item.isFolder && this.state.activo == false) {
      this.setState({ activo: true })
    }else if(this.item.isFolder && this.state.activo == true){
      this.setState({ activo: false })
    }
  }
  mouseOn = () =>{
    this.setState({hover:true})
  }
  mouseOff = () =>{
    this.setState({hover:false})
  }

  render() {
    const iconDerecha = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
    const iconAbajo = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">   <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /> </svg>
    const nombreTitulo = this.item.name
    const itemsMenu = this.itemsMenu.filter((item) => item.idPadre === this.item.id)     //Lista con los items del nuevo padre 
    const itemsSubMenu = this.itemsMenu.filter((item) => item.idPadre != this.item.id)   //Lista de items que no son hijos del nuevo padre
    return (
      <div className='subMenu' style={this.state.activo || this.state.hover ? {background:this.configColor.itemActive} : {background:this.configColor.itemBackground} }>
        <a style={{ color: this.configColor.itemColor }} onClick={this.click}  onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOff}>{nombreTitulo}{
          this.item.isFolder ?
            (this.state.activo ? iconAbajo : iconDerecha) :
            ''
        }
        </a>
        <ul  className='items' >
          {this.state.activo && itemsMenu.map((item, index) => {
            return (
              <li className='item' >
                <SubMenuItems item={item} itemsSubMenu={itemsSubMenu} configColor={this.configColor} />
              </li>
            )
          })}
        </ul>
      </div>

    )

  }
}
export default SubMenu