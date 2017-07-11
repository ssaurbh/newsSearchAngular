describe("ImageLokkUpService", function () {

    beforeEach(module("landMarkApp"));

   

        var service, $httpBackend;

        var retData = {

                'hits': [{
                    'webformatURL': 'htp://localhost:8001/tajmahal.jpp'
                },{
                     'webformatURL': 'htp://localhost:8001/tajmahal123.jpp'
                }
                ]


        }
       

        beforeEach(inject(function($injector) {
            service = $injector.get('imageLookup');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', "https://pixabay.com/api?key=5537510-1513f1715e0ed263b2b612efd&hp=&image_type=&cat=&min_width=&min_height=&q=TajMahal&order=popular").respond(retData);
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('getImageURL - should return 1 URL for TajMahal', function () {
            service.getImageURL('TajMahal').then(function(response) {
                console.log(response);
                alert(response);
                expect(response.hits.length).toEqual(2); //the response is null
            });
            $httpBackend.flush();
        });


   
});