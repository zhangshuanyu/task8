"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("postcode and barcode convert test", function(){
    sinon.spy(console, 'log');

    it("text postcard", function(){

        var result = main(12255 );
        var expect_string = '|\t:::||\t::|:|\t::|:|\t:|:|:\t:|:|:\t:|:|:\t|';

        expect(expect_string).to.equal(result);
    });

    it("text barcode", function(){

        var result =  main('|\t:|::|\t:|::|\t:|::|\t:|::|\t:|::|\t:::||\t::|:|\t::||:\t:|::|\t||:::\t|');
        var expect_string = '44444-1234' ;
        expect(expect_string).to.equal(result);
    });
});