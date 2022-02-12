
/// <reference types="cypress" />
describe('API Testing ', () => {
        context('API Planet Instance', () => {

          it('Verify the follwing response Headers', () => {
              cy.request({
                method: 'GET',
                 failOnStatusCode: false,
                url: 'https://swapi.dev/api/planets/3', 
                // qs: {
                //   _id: '800'
                // }
              })
                .should((response) => {
                    expect(response.headers.allow).eq("GET, HEAD, OPTIONS")
                    expect(response.headers.connection).eq("keep-alive")
                    expect(response.headers['content-type']).eq("application/json")
                    expect(response.headers.etag).eq("\"ccbca9ad5dbcc6c73413df0765660c26\"")
                    expect(response.headers.server).eq("nginx/1.16.1")
                    expect(response.headers['strict-transport-security']).eq("max-age=15768000")
                    expect(response.headers['transfer-encoding']).eq("chunked")
                    expect(response.headers.vary).eq("Accept, Cookie")
                    expect(response.headers['x-frame-options']).eq("SAMEORIGIN")
                });
            });

            it('Verify the follwing response Time is less then 3ms', () => {
                  cy.request({
                    method: 'GET',
                     failOnStatusCode: false,
                    url: 'https://swapi.dev/api/planets/3', 
                    // qs: {
                    //   _id: '800'
                    // }
                  })
                    .should((response) => {
                        expect(response.duration).to.not.be.greaterThan(3000)
                    });
                });

            it('Verify the follwing response Data', () => {
                  cy.request({
                    method: 'GET',
                     failOnStatusCode: false,
                    url: 'https://swapi.dev/api/planets/3', 
                    // qs: {
                    //   _id: '800'
                    // }
                  })
                    .should((response) => {
                        cy.log("API Response Data :"+JSON.stringify(response.body))
                    });
                });

                it('Negative Test Verify that the response code is eq 405', () => {
                      cy.request({
                        method: 'POST',
                         failOnStatusCode: false,
                        url: 'https://swapi.dev/api/planets/3', 
                        qs: {
                            "name": "Automated testing",
                            "Completed": true
                        },
                      })
                        .should((response) => {
                            expect(response.status).eq(405)
                        });
                    });
                    
                    it('Negative Test Verify that the response Message equals to Method POST not allowed.', () => {
                        cy.request({
                          method: 'POST',
                           failOnStatusCode: false,
                          url: 'https://swapi.dev/api/planets/3', 
                          qs: {
                              "name": "Automated testing",
                              "Completed": true
                          },
                        })
                          .should((response) => {
                              expect(response.body.detail).eq("Method 'POST' not allowed.")
                          });
                      });

                      it('Negative Test Verify JSON Schema', () => {
                        cy.request({
                          method: 'GET',
                           failOnStatusCode: false,
                          url: 'https://swapi.dev/api/planets/3', 
                        })
                          .should((response) => {
                              expect(response.body.name).eq("Yavin IV")
                              expect(response.body.rotation_period).eq("24")
                              expect(response.body.orbital_period).eq("4818")
                              expect(response.body.diameter).eq("10200")
                              expect(response.body.climate).eq("temperate, tropical")
                              expect(response.body.gravity).eq("1 standard")
                              expect(response.body.terrain).eq("jungle, rainforests")
                              expect(response.body.surface_water).eq("8")
                              expect(response.body.population).eq("1000")
                              expect(response.body.created).eq("2014-12-10T11:37:19.144000Z")
                              expect(response.body.edited).eq("2014-12-20T20:58:18.421000Z")
                              expect(response.body.url).eq("https://swapi.dev/api/planets/3/")
                          });
                      });
        });
    });