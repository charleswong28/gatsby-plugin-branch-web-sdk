'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRenderBody = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onRenderBody = function onRenderBody(_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents;
  var devBranchKey = _ref2.devBranchKey,
      prodBranchKey = _ref2.prodBranchKey;

  var branchKey = process.env.NODE_ENV === 'production' ? prodBranchKey : devBranchKey;
  if (branchKey) {
    var snippet = '(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);branch.init(\'' + branchKey + '\', () => window.branch = branch);';
    return setHeadComponents([_react2.default.createElement('script', { key: 'branch-snippet', type: 'text/javascript', dangerouslySetInnerHTML: { __html: snippet } })]);
  }
};

exports.onRenderBody = onRenderBody;