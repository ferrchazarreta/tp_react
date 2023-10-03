import { Component } from "react";

class DrawClass extends Component {

    render() {
        const { name, attributes, methods, borderColor, headColor, textColor } = this.props.data
        let totalHeight = 40 + (30 * attributes.length) + (30 * methods.length) + 20
        let altAttributes = []
        let altMethods = []
        let totalAttributes = 70
        let listaUnificada = attributes.concat(methods)

        for (let i = 0; i < attributes.length; i++) {
            altAttributes.push(totalAttributes)
            totalAttributes = totalAttributes + 30
        }

        let totalMethods = 75 + (30 * altAttributes.length)

        for (let i = 0; i < methods.length; i++) {
            altMethods.push(totalMethods)
            totalMethods = totalMethods + 30
        }

        const calcMaxWidth = texts => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            let maxTextSize = 0;

            texts.forEach(text => {
                // Configura la fuente para medir el texto
                context.font = '16px Arial'; // Puedes ajustar el tamaño y la fuente según tus necesidades

                // Mide el ancho del texto
                const textWidth = context.measureText(text).width;

                // Actualiza el tamaño máximo si es necesario
                if (textWidth > maxTextSize) {
                    maxTextSize = textWidth;
                }
            });

            return maxTextSize + 40; //40px es el margin aplicado
        };


        return (
            <svg width={calcMaxWidth(listaUnificada)} height={totalHeight} style={{ margin: "50px" }}>
                <rect width="100%" height="40" fill={headColor}></rect>
                <rect width="100%" height="100%" fill="transparent" stroke={borderColor} stroke-width="3" />
                <text font-family="Arial" fill="black" x="20" y="30">{name}</text>
                <line x1={calcMaxWidth(listaUnificada)} y1="40" x2="0" y2="40" stroke={borderColor} stroke-width="2" />

                {attributes.map((name, index) => <text font-family="Arial" fill={textColor} x="20" y={altAttributes[index]}>{name}</text>)}
                <line x1={calcMaxWidth(listaUnificada)} y1={50 + altAttributes.length * 30} x2="0" y2={50 + altAttributes.length * 30} stroke={borderColor} stroke-width="2" />
                {methods.map((name, index) => <text font-family="Arial" fill={textColor} x="20" y={altMethods[index]}>{name}</text>)}
            </svg>
        )
    }
}

export default DrawClass