"use strict";

if (typeof MSLIB == 'undefined') var MSLIB = {};
if (typeof MSLIB.Data == 'undefined') MSLIB.Data = {};
MSLIB.Data.Scan = function() {
 var Scan = function() {
  this.ScanNumber           = null;
  this.MsLevel              = null;
  this.Centroided           = null;
  this.RetentionTime        = null;
  this.LowMz                = null;
  this.HighMz               = null;
  this.TotalCurrent         = null;
  this.BasePeakMz           = null;
  this.BasePeakIntensity    = null;
  this.Analyser             = null;
  this.PrecursorMzs         = [];
  this.PrecursorIntensities = [];
  this.PrecursorCharges     = [];
  this.ActivationMethods    = [];
  this.Internal             = {};
  this.Spectrum             = null;
 };
 return Scan;
}();