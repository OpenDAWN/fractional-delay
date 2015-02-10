var assert = require('assert');
var FractionalDelay = require('../fractional-delay.es6.js');

describe("FractionalDelay tests", function() {
    var fd = new FractionalDelay(44100);
    it('should set delay correctly', function() {
        fd.setDelay(0.5);
    });
    it('should throw error when delay > maxDelayTime', function() {
        assert.throws(function() {
            fd.setDelay(2);
        }, Error);
    });
    it('should return delay', function() {
        var delay = 0.3
        fd.setDelay(delay);
        assert.equal(fd.getDelay(), delay);
    });
    it('should correctly do the fractional delay - dataset 1', function() {
        fd.setDelay(0.001300000000000);
        var inputBuffer = [1.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000];
        var supposedOutputBuffer = [0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.503759398494, 0.746226468429, -0.375918596876, 0.189372526245, -0.095398189913, 0.048057734768, -0.024209535560, 0.012195781071, -0.006143739337, 0.003094966433, -0.001559118429, 0.000785420562, -0.000395662990, 0.000199318950, -0.000100408794, 0.000050581874, -0.000025481094, 0.000012836341, -0.000006466427, 0.000003257524, -0.000001641008, 0.000000826673, -0.000000416444, 0.000000209788, -0.000000105683, 0.000000053239, -0.000000026819, 0.000000013511, -0.000000006806, 0.000000003429, -0.000000001727, 0.000000000870, -0.000000000438, 0.000000000221, -0.000000000111, 0.000000000056, -0.000000000028, 0.000000000014, -0.000000000007, 0.000000000004, -0.000000000002, 0.000000000001, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000];
        var outputBuffer = fd.process(inputBuffer);
        for (var i = 0; i < supposedOutputBuffer.length; i++) {
            console.log(supposedOutputBuffer[i], outputBuffer[i])
            assert(Math.abs(outputBuffer[i] - supposedOutputBuffer[i]) < 0.0000001);
        }
    })
    it('should correctly do the fractional delay - dataset 2', function() {
        fd.setDelay(0.000333333333333);
        var inputBuffer = [1.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000];
        var supposedOutputBuffer = [0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.176470588235, 0.968858131488, -0.170974964380, 0.030172052538, -0.005324479860, 0.000939614093, -0.000165814252, 0.000029261339, -0.000005163766, 0.000000911253, -0.000000160809, 0.000000028378, -0.000000005008, 0.000000000884, -0.000000000156, 0.000000000028, -0.000000000005, 0.000000000001, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000, -0.000000000000, 0.000000000000];
        var outputBuffer = fd.process(inputBuffer);
        for (var i = 0; i < supposedOutputBuffer.length; i++) {
            console.log(supposedOutputBuffer[i], outputBuffer[i])
            assert(Math.abs(outputBuffer[i] - supposedOutputBuffer[i]) < 0.0000001);
        }
    })
});
