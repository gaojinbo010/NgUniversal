import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from "./home";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    // BrowserModule,
    BrowserModule.withServerTransition({ appId: "universal-app" }),
    AppRoutingModule,
    TransferHttpCacheModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
