//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  template: `
    <my-tabs (addPerson)="onAddPerson()">
      <my-tab [tabTitle]="'People'">
        <h3>List of People</h3>
        <people-list
          [people]="people"
          (addPerson)="onAddPerson()"
          (editPerson)="onEditPerson($event)">
        </people-list>
        <hr />
      </my-tab>
    </my-tabs>

    <ng-template let-person="person" #personEdit>
      <person-edit [person]="person" (savePerson)="onPersonFormSubmit($event)"></person-edit>
    </ng-template>
  `,
})
export class AppComponent {
  @ViewChild('personEdit') editPersonTemplate;

  @ViewChild(TabsComponent) tabsComponent;

  people = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr',
    },
  ];

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map((person) => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }
}
