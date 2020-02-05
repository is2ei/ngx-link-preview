import { TestBed } from '@angular/core/testing';

import { NgxLinkPreviewService } from './ngx-link-preview.service';

describe('NgxLinkPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLinkPreviewService = TestBed.get(NgxLinkPreviewService);
    expect(service).toBeTruthy();
  });
});
