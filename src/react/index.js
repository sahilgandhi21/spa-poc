import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './react.component.js'

const domElementGetter = () => {
  let el = document.getElementById('react')
  if (!el) {
    el = document.createElement('div')
    el.id = 'react'
    document.body.appendChild(el)
  }

  return el
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

//export const unmount = props => reactLifecycles.unmount(props)

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
      let el = document.getElementById("react");
      el.remove();
    })
}