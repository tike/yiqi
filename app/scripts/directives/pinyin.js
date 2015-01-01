'use strict';

angular.module('yiqiApp')
  .directive('yqPinyin', function ($log) {
    var TONES = [
			{'help': 'gerade',	'num': 1, 'a': '\u0101', 'e': '\u0113', 'i': '\u012B', 'o': '\u014D', 'u': '\u016B', 'ü': '\u01D6'},
			{'help': 'hebend',	'num': 2, 'a': '\u00E1', 'e': '\u00E9', 'i': '\u00ED', 'o': '\u00F3', 'u': '\u00FA', 'ü': '\u01D8'},
			{'help': 'gewellt',	'num': 3, 'a': '\u01CE', 'e': '\u011B', 'i': '\u01D0', 'o': '\u01D2', 'u': '\u01D4', 'ü': '\u01DA'},
			{'help': 'absinkend',	'num': 4, 'a': '\u00E0', 'e': '\u00E8', 'i': '\u00EC', 'o': '\u00F2', 'u': '\u00F9', 'ü': '\u01DC'},
			{'help': 'tonlos',	'num': 5, 'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u', 'ü': 'ü'},
		];
    
    var COLORS ={
        'dummitt': ['red',   'orange', 'green',  'blue',   'black'],
        'Unimelb': ['blue',  'green',  'purple', 'red',    'grey'],
        'Hanping': ['blue',  'green',  'orange', 'red',    'grey'],
        'Pleco':   ['red',   'green',  'blue',   'purple', 'grey'],
        'Thomas':  ['green', 'blue',   'red',    'black',  'grey'],
    };
    
    function getPos (token) {
			if (token.length === 1){
				// only one letter, nothing to differentiate
				return 0;
			}
			var precedence = ['a', 'e', 'o'];
			for (i=0; i<precedence.length; i += 1){
				var pos = token.indexOf(precedence[i]);
				// checking a before o, will take care of ao automatically
				if (pos >= 0){
					return pos;
				}
			}
			var u = token.indexOf('u');
			var i = token.indexOf('i');
			if (i < u){
				// -iu OR u-only case, accent goes to u
				return u;
			} else {
				// -ui OR i-only case, accent goes to i
				return i;
			}
			// the only vowel left is ü
			var ü = token.indexOf('ü');
			if (ü >= 0){
				return ü;
			}
			// no vowel the final will be invalid
			return NaN;
		};
    
    function placeTone(sylable, tone){
      var tonePos = getPos(sylable);
      if (isNaN(tonePos)){
        return sylable;
      }
      
      sylable = sylable.slice(0, tonePos) + TONES[tone - 1][sylable.charAt(tonePos)] + sylable.slice(tonePos + 1, -1);
      return sylable;
    };
    
    
    return {
      restrict: 'A',
      replace: true,
      scope: {
      },
      link: function(scope, elem, attrs){
        $log.debug('scope:', scope);
        $log.debug('elem:', elem);
        $log.debug('attrs:', attrs);
        
        var sylable = elem.text();
        
        var tone = parseInt(sylable.charAt(sylable.length - 1), 10);
        if (isNaN(tone)){
          return sylable;
        }
        
        elem.text(placeTone(sylable, tone));
        elem.css('color', COLORS['Hanping'][tone - 1]);
      },
    };
  });