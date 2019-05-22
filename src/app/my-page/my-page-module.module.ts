import {NgModule} from '@angular/core'
import { MyPageRoutingModule } from './my-page-routing-module.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [MyPageRoutingModule, SharedModule],
    declarations: [MyPageRoutingModule.components]
})

export class MyPageModule {}
