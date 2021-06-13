import '../css/componentes.css'
//import webpacklogo from '../assets/img/webpack-logo.png'

export function saludar(nombre) {

  console.log('creando etiqueta p');

  const h1 = document.createElement('h1')
  h1.innerText = `Bienvenido ${nombre}!`
  document.body.append(h1)

  //img
  // console.log(webpacklogo)
  // const img = document.createElement('img')
  // img.src = webpacklogo;
  // document.body.append( img );

}