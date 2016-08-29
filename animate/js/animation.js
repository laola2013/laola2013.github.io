	$().ready(function() {
		var $lu = $("#lu");
		var $xf = $("#xf");
		function luAnimation(elem1, elem2) {
			this.$luElem = elem1;
			this.$xfElem = elem2;
			this._init();
		}
		luAnimation.prototype.next = function(options) {
			var dfd = $.Deferred();
			this.$luElem.transition(options.style, options.time, "linear", function() {
				dfd.resolve();
			});
			console.log("hello");
			return dfd;
		}
		luAnimation.prototype.removeClass = function(elem, _class) {
			elem.removeClass(_class);
		}
		luAnimation.prototype.addClass = function(elem) {
			elem.addClass("xf").addClass("xfAni");
		}
		luAnimation.prototype._init = function() {
			var _this = this;
			var run = function() {
				return this.next.apply(this, arguments);
			}.bind(this);
			run({
			    "time": 10000,
			    "style": {
			        "top": "3rem",
			        "right": "16rem",
			        "scale": "1.2"
			    }
			})
			.then(function() {
			   return run({
			        "time":500,
			        "style": {
			           "rotateY" : "-180",
			           "scale": "1.5"
			        }
			    })
			})    
			.then(function() {
			    return run({
			        "time": 5000,
			        "style": {
			            "top"   :"4rem",
			            "right" : "7rem"
			        }
			    })
			})
			.then(function() {
				_this.removeClass(_this.$luElem, "luMoveon");
			})
			.then(function() {
				_this.addClass(_this.$xfElem);
			})
		}
		new luAnimation($lu, $xf);
	})
