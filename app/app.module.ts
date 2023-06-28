import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { PersonEditComponent } from './people/person-edit.component';
import { PeopleListComponent } from './people/people-list.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    PersonEditComponent,
    PeopleListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent],
})
export class AppModule {}
