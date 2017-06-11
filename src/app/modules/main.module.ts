import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@emartech/angular-translate';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AppComponent } from '../components/app/app.component';
import { PROVIDERS } from '../services';
import { PIPES } from '../pipes';
import { COMPONENTS } from '../components';
import { routes } from '../components/routes';
import { TranslationFactory } from '../translations/translations';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    TranslateModule.forRoot({ provide: 'translations', useFactory: TranslationFactory.getTranslations })
  ],
  providers: [
    PROVIDERS,
    { provide: 'ACTUAL_YEAR', useValue: 2016 }
  ]
})
export class MainModule {}
