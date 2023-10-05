import './App.css';
import DrawClass from './components/DrawClass'
import Menu from './components/Menu';


const CLASS_UML = {
  name: 'Person',
  attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
  methods: ['+purcharseParkinPass()'],
  borderColor: '#DC2DDE',
  headColor: '#DC2DDE',
  textColor: '#333333'
}

const CLASS_UML2 = {
  name: 'Address',
  attributes: ['+street:str', '+city:str', '+state:str', '+postalCode:int', '+country:str'],
  methods: ['-validate()', '+outputAsLabel():str'],
  borderColor: 'blue',
  headColor: 'blue',
  textColor: '#333333'
}

const configMenu = {
  configColor: {
    background: '#f4f5fa', // Color de Fondo General de la botonera
    itemBackground: 'grey',// Color de Fondo de los subMenús
    itemColor: 'white', // Color del texto de cada item del menú
    itemActive: '#a8a8a8', // Color cuando hace click y se abre un submenú
  },
  idFirstNivel: 150,
  menuItems: [
    { name: 'Another Action', isFolder: false, id: 148, idPadre: 150 },
    { name: 'sub menu', isFolder: true, id: 2, idPadre: 150 },
    { name: 'Action', isFolder: false, id: 3, idPadre: 2 },
    { name: 'Another action', isFolder: false, id: 4, idPadre: 2 },
    { name: 'sub menu', isFolder: true, id: 5, idPadre: 2 },
    { name: 'Another action', isFolder: false, id: 55, idPadre: 5 },
    { name: 'agregado 1', isFolder: false, id: 56, idPadre: 5 },
    { name: 'agregado 2', isFolder: false, id: 57, idPadre: 5 },
    { name: 'agregado 3', isFolder: true, id: 58, idPadre: 5 },
    { name: 'agregado 4', isFolder: false, id: 581, idPadre: 58 },
    { name: 'agregado 4', isFolder: true, id: 582, idPadre: 58 },
    { name: 'agregado 4', isFolder: false, id: 583, idPadre: 582 },

  ],
} // end


function App() {
  return (
    <div>
      <Menu data={configMenu} />
    </div>
  );
}

export default App;
