'use strict';

describe('Service: FulltextSearch', function () {

  // load the service's module
  beforeEach(module('yiqiApp'));

  // instantiate service
  var FulltextSearch;
  beforeEach(inject(function (_FulltextSearch_) {
    FulltextSearch = _FulltextSearch_;
  }));

  it('should do something', function () {
    expect(!!FulltextSearch).toBe(true);
  });

});
