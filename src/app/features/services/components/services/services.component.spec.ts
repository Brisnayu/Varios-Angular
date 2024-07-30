import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from '../../services-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';


describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ServicesRoutingModule,
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: 'services/login', component: LoginComponent }
        ])
      ],
      declarations: [ServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería redirigir a la página de LOGIN', fakeAsync(() => {
    spyOn(router, 'navigate').and.stub();

    component.goToLogin();

    tick();

    expect(router.navigate).toHaveBeenCalledOnceWith(['services/login'])
  }))
});
