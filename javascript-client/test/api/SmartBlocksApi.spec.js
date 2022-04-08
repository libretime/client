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
    instance = new LibreTimeApi.SmartBlocksApi();
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

  describe('SmartBlocksApi', function() {
    describe('smartBlocksCreate', function() {
      it('should call smartBlocksCreate successfully', function(done) {
        //uncomment below and update the code to test smartBlocksCreate
        //instance.smartBlocksCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smartBlocksDestroy', function() {
      it('should call smartBlocksDestroy successfully', function(done) {
        //uncomment below and update the code to test smartBlocksDestroy
        //instance.smartBlocksDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smartBlocksList', function() {
      it('should call smartBlocksList successfully', function(done) {
        //uncomment below and update the code to test smartBlocksList
        //instance.smartBlocksList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smartBlocksPartialUpdate', function() {
      it('should call smartBlocksPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test smartBlocksPartialUpdate
        //instance.smartBlocksPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smartBlocksRetrieve', function() {
      it('should call smartBlocksRetrieve successfully', function(done) {
        //uncomment below and update the code to test smartBlocksRetrieve
        //instance.smartBlocksRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smartBlocksUpdate', function() {
      it('should call smartBlocksUpdate successfully', function(done) {
        //uncomment below and update the code to test smartBlocksUpdate
        //instance.smartBlocksUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));