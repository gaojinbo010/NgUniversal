import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    //客户端使用的AppModule
    AppModule,
    //服务端使用的AppModule
    ServerModule,
    //服务端的路由懒加载
    ModuleMapLoaderModule,
    //数据状态从服务端传送到客户端
    ServerTransferStateModule,
  ],
  //重新启动AppComponent
  bootstrap: [AppComponent],
})
export class AppServerModule { }
