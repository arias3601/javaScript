import {Routes} from "@angular/router";
import {ContactEditComponent} from "./contact-edit/contact-edit.component";
import {ContactsDetailComponent} from "./contact-detail/contact-detail.component";
export const CONTACT_ROUTES:Routes = [
  {path: 'new', component: ContactEditComponent},
  {path: ':idx/detail', component: ContactsDetailComponent},
  {path: ':idx/edit', component: ContactEditComponent}

]
