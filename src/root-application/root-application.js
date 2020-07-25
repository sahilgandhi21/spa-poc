import { registerApplication, start } from 'single-spa'

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)


registerApplication('angular', () => import('../angular/index.js'), hashPrefix('/list'))
registerApplication('react', () => import('../react/index.js'), hashPrefix('/detail'))

start()