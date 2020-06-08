import ConversionTracker from '../src/conversion-tracker'

window.CodeFund = new ConversionTracker(window.CodeFundConfig || {})

// Example
//   window.CodeFund.trackConversion('12345')
