(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Set = factory());
}(this, (function () { 'use strict';

    function isUndefined() {
        return arguments.length > 0 && typeof arguments[ 0 ] === 'undefined';
    }

    var Set = function Set( iterable ) {
        var this$1 = this;
        if ( iterable === void 0 ) iterable = [];

        if( !( this instanceof Set ) ) {
            throw new TypeError( 'Constructor Set requires \'new\'' );
        }
        this.set = [];

        if( iterable && iterable.length ) {
            for( var i = 0, list = iterable; i < list.length; i += 1 ) {
                var item = list[i];

                this$1.add( item );
            }
        }
    };

    var prototypeAccessors = { size: { configurable: true } };

    prototypeAccessors.size.get = function () {
        return this.set.length;
    };

    Set.prototype.add = function add ( value ) {
        var i = this.set.indexOf( value );
        if( i > -1 ) {
            this.set[ i ] = value;
        } else {
            this.set.push( value );
        }
        return this;
    };

    Set.prototype.delete = function delete$1 ( value ) {
        var i = this.set.indexOf( value );
        if( i > -1 ) {
            this.set.splice( i, 1 );
            return true;
        }
        return false;
    };

    Set.prototype.clear = function clear () {
        this.set = [];
    };

    Set.prototype.forEach = function forEach ( callback, thisArg ) {
            var this$1 = this;

        isUndefined( thisArg ) && ( this.Arg = this );
        for( var i = 0, list = this$1.set; i < list.length; i += 1 ) {
            var item = list[i];

                callback.call( thisArg, item, item, this$1 );
        }
    };

    Set.prototype.has = function has ( value ) {
        return this.set.indexOf( value ) > -1;
    };

    Set.prototype.keys = function keys () {
        return this.values();
    };

    Set.prototype.entries = function entries () {
            var this$1 = this;

        var res = [];
        for( var i = 0, list = this$1.set; i < list.length; i += 1 ) {
            var item = list[i];

                res.push( [ item, item ] ); 
        }
        return res;
    };

    Set.prototype.values = function values () {
        return this.set;
    };

    Object.defineProperties( Set.prototype, prototypeAccessors );

    return Set;

})));
