import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJarComponent } from './upload-jar.component';

describe('UploadJarComponent', () => {
  let component: UploadJarComponent;
  let fixture: ComponentFixture<UploadJarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadJarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
