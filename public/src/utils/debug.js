/*
* debug相关接口
*
*/

var Debug = Debug || {};
const release = false;

/**
 * log(tag, content) or log(content)
 *
 * @param logStr
 */
function log(logStr){
    if(!release){
        if (arguments.length >= 2){
            console.log(arguments[0] + ": " + arguments[1]);
        }else{
            console.log(logStr);
        }
    }
}

function dump(name, obj){
    if(!release){
        log("["+name +"]  "+ toJsonString(obj));
    }
}

function toJsonString(obj, maxLevel, level) {
	
	if (maxLevel === undefined) {
		maxLevel = 10;
	}

	if (level === undefined) {
		level = 0;
	}

	if (level === maxLevel) {
		return "" + obj + '???';
	}

	var _SPACE = '    ';


	if (obj === null) {
		return '\"' + obj + '\"';
	}

	if (typeof obj === 'string') {
		return '\"' + obj + '\"';
	} else if (typeof obj === 'function') {
		return "Function";
	} else if (typeof obj === 'native code') {
		return "native code";
	}
	else if (typeof obj !== 'object') {
		return "" + obj ;
	}
	else{
		var _lastPre = "";

		for (var i = 0; i < level; i++) {
			_lastPre += _SPACE;
		}
		var _pre = _lastPre + _SPACE;

		var _ret = '{' + '\n';

		var _isEmptyObj = true;

		for (var _tmp in obj) {
			if (i === 0) {
				i++;
			}

			if (!obj.hasOwnProperty(_tmp)  ) {
				continue;
			}

			_isEmptyObj = false;

			var objValue = toJsonString(obj[_tmp], maxLevel, level + 1);

			if (objValue.indexOf('function') >= 0) {
				//objValue += 'function777';
				//continue;
			}
			if (objValue === 'Function') {
				// continue;
			}

			_ret += _pre;
			if (!obj.hasOwnProperty(_tmp)) {
				_ret += "prototype.";

			} else {

			}

			var _type = typeof(obj[_tmp]);

			_ret += _tmp;
			_ret += '[' + _type;
			_ret += ']';
			_ret += " : ";
			_ret += objValue;
			_ret += ' ,\n';
		}
		_ret += _lastPre + '}';

		if(_isEmptyObj){
			_ret = '{}';
		}
		return _ret;
	}
};

function warn(usrTag, msg) {
    if(arguments.length >= 2){	
    	log("WARN-" + usrTag + "  " + msg);
    }else{
    	msg = usrTag;
    	log("WARN  " + msg);
    }
};

function assert(expression, msg, info0, info1) {

    function _printLastCallStack() {

        var count = 0;
        var fun = arguments.callee;
        do {
            if (
                count >=3   && count < 10
                ) {
                var _funcStr = '' + fun;
                warn('stack-' + count,_funcStr);     //只取前100个
            }
            else{
                if(count >= 10){
                    break;
                }
            }
            fun = fun.arguments.callee.caller;    //如果有递归，那么这里就会无限循环

            count++;

        } while (fun);
    }


    function _createLastCallStackString() {

        var _ret = '';

        var count = 0;
        var fun = arguments.callee;
        do {
            if (
                count >=3 && count < 10
                ) {
                var _funcStr = '' + fun;
                _ret += _funcStr;
            }
            else{
                if(count >= 10){
                    break;
                }
            }
            fun = fun.arguments.callee.caller;    //如果有递归，那么这里就会无限循环

            count++;

        } while (fun);

        return _ret;
    }

    if (expression === null || expression === undefined || expression === false) {

        var params = '\n' + '------------err msg------------' + '\n'
            + toJsonString({
                expression: expression,
                msg: msg,
                info0: info0,
                info1: info1
            })
            + '------------create ------------\n'
            + _createLastCallStackString();

        warn('assert',params);

        //nn.Views.Dialog.ErrorDialog.show(params + '\n');
   
        if (assertExit !== true) {
            return;
        }

        nn.Utils.Sys.exit();
    }
};

function testBegin() {
    Debug._testbegin = new Date().getTime();
    Debug._testIsBegin = true;
};

function testEnd(tag) {
    Debug._testEnd = new Date().getTime();
    assert(Debug._testIsBegin === true, 'nn.Debug._testIsBegin need');
    log(tag + " " + Debug._testEnd + ' - ' + Debug._testbegin + ' : ' + 
    							(Debug._testEnd - Debug._testbegin));
    this.testBegin();
};

export default {
  log, dump, testBegin, testEnd
}