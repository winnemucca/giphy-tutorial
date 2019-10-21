import { TestBed } from '@angular/core/testing';

import { WelcomeService } from './welcome.service';
import { HttpClientModule } from '@angular/common/http';

describe('WelcomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: WelcomeService = TestBed.get(WelcomeService);
    expect(service).toBeTruthy();
  });
});
