import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistItemComponentComponent } from './postlist-item-component.component';

describe('PostlistItemComponentComponent', () => {
  let component: PostlistItemComponentComponent;
  let fixture: ComponentFixture<PostlistItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlistItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
