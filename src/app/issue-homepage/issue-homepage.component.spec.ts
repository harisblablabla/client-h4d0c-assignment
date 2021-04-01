import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHomepageComponent } from './issue-homepage.component';

describe('IssueHomepageComponent', () => {
  let component: IssueHomepageComponent;
  let fixture: ComponentFixture<IssueHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
