//1.
describe('landmarkController', function () {
    //2.
beforeEach(module('landMarkApp'));    
var landmarkController,
scope,
imageLookup,
placeLookup;

beforeEach(inject(function(_$rootScope_,_$controller_,_imageLookup_,_placeLookup_){
    landmarkController = _$controller_;
    scope = _$rootScope_.$new();
    imageLookup = _imageLookup_;
    placeLookup = _placeLookup_;
    
  }));

 it('should have a landmarkController controller', function() {
    expect(landmarkController).toBeDefined();
  });

 

});