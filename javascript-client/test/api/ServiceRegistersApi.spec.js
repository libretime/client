/**
 * LibreTime API
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LibreTimeApi);
  }
}(this, function(expect, LibreTimeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LibreTimeApi.ServiceRegistersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServiceRegistersApi', function() {
    describe('serviceRegistersCreate', function() {
      it('should call serviceRegistersCreate successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersCreate
        //instance.serviceRegistersCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('serviceRegistersDestroy', function() {
      it('should call serviceRegistersDestroy successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersDestroy
        //instance.serviceRegistersDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('serviceRegistersList', function() {
      it('should call serviceRegistersList successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersList
        //instance.serviceRegistersList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('serviceRegistersPartialUpdate', function() {
      it('should call serviceRegistersPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersPartialUpdate
        //instance.serviceRegistersPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('serviceRegistersRetrieve', function() {
      it('should call serviceRegistersRetrieve successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersRetrieve
        //instance.serviceRegistersRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('serviceRegistersUpdate', function() {
      it('should call serviceRegistersUpdate successfully', function(done) {
        //uncomment below and update the code to test serviceRegistersUpdate
        //instance.serviceRegistersUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));