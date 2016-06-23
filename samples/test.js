/**
sample javascript from xui
*/

var foo = 1;
var bar = function(){
	return bar;
};

function foo(q,context){
	return true;
};

var foo = {
	bar: function () {
		return 1;
	},
	baz: 1,
};

debugger;

o.foo();
o.bar = 1;

var undefined,
	xui,
	window     = this,
	string     = new String('string'),
	document   = window.document,
	simpleExpr = /^#?([\w-]+)$/,
	idExpr     = /^#/,
	tagExpr    = /<([\w:]+)/,
	slice      = function (e) { return [].slice.call(e, 0); };
	try { var a = slice(document.documentElement.childNodes)[0].nodeType; }
	catch(e){ slice = function (e) { var ret=[]; for (var i=0; e[i]; i++)
		ret.push(e[i]); return ret; }; }


window.x$ = window.xui = xui = function(q, context) {
	return new xui.fn.find(q, context);
};

console.log( 'string', params );

do
if
in
for
let
new
try
var
case
else
enum
eval
null
this
true
void
with
break
catch
class
const
false
super
throw
while
yield
delete
export
import
public
return
static
switch
typeof
default
extends
finally
package
private
continue
debugger
function
arguments
interface
protected
implements
instanceof
