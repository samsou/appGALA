import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { AccueilPage } from './accueil';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AccueilPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilPage),
    ComponentsModule,
    DirectivesModule
  ],
  providers:[
    DatePipe
  ]
})
export class AccueilPageModule { }
