import 'zone.js'
import 'reflect-metadata'
import singleSpaAngular from 'single-spa-angular2'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import mainModule from './main-module.ts'
import { Router } from '@angular/router'
import { NgZone } from '@angular/core'

const domElementGetter = () => {
  let el = document.getElementById('angular')
  if (!el) {
    el = document.createElement('div')
    el.id = 'angular'
    document.body.appendChild(el)
  }

  return el
}

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<AngularApp />`,
  Router,
  NgZone
})

export const bootstrap = props => ngLifecycles.bootstrap(props)

export const mount = props => ngLifecycles.mount(props)
/* export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
      let el = document.getElementById('angular')
  if (!el) {
    el = document.createElement('div')
    el.id = 'angular'
    document.body.appendChild(el)
  }
    })
} */

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
      let el = document.getElementById("angular");
      el.remove();
    })
}


