/**
 * Easing types are different equations to determine the path of a region tween.
 * They can be used in resizes or moveTo scripts.  All of them follow the same input formula.
 * @param {DateTime|Int} t The amount of time that has passed since the animation began.
 * @param {Int|Float} b The current position of the x or y point of the top left corner of the region
 * @param {Int|Float} c The total delta for the x or y point from beginning position to the end position
 * @param {Int} d The total duration of the animation
 * @return {Float} The next position of the x or y point.
 */
export const easingTypes = {

    linear: function(t,b ,c, d) {
      return c*t/d + b;
    },

    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c*t*t + b;
    },

    easeOutQuad: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },

    easeInCubic: function(t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },

    easeOutCubic: function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },

    easeInOutCubic: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },

    easeInQuart: function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t + b;
    },

    easeOutQuart: function(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t*t*t*t - 1) + b;
    },

    easeInOutQuart: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    },

    easeInQuint: function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t*t + b;
    },

    easeOutQuint: function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t*t*t + 1) + b;
    },

    easeInOutQuint: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    },

    easeInSine: function(t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },

    easeOutSine: function(t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },

    easeInOutSine: function(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },

    easeInExpo: function(t, b, c, d) {
        return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    },

    easeOutExpo: function(t, b, c, d) {
        return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
    },

    easeInOutExpo: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
        t--;
        return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
    },

    easeInCirc: function(t, b, c, d) {
        t /= d;
        return -c * (Math.sqrt(1 - t*t) - 1) + b;
    },

    easeOutCirc: function(t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t*t) + b;
    },

    easeInOutCirc: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        t -= 2;
        return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
    },

    easeInElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },

    easeOutElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },

    easeInOutElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },

    easeInBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },

    easeOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },

    easeInOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },

    easeInBounce: function(t, b, c, d) {
        return c - this.easeOutBounce(d-t, 0, c, d) + b;
    },

    easeOutBounce: function(t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },

    easeInOutBounce: function(t, b, c, d) {
        if (t < d/2) return this.easeInBounce(t*2, 0, c, d) * .5 + b;
        return this.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
}