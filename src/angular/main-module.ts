import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from'@angular/common/http'
import AngularApp from './angular.component.ts'
import { enableProdMode } from '@angular/core'
import { APP_BASE_HREF, CommonModule } from "@angular/common"

enableProdMode()

@NgModule({
  imports: [
    BrowserModule, HttpClientModule, CommonModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular/' }],
  declarations: [
    AngularApp
  ],
  bootstrap: [AngularApp]
})
export default class MainModule {
}
