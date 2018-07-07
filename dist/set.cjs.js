'use strict';

function isUndefined() {
    return arguments.length > 0 && typeof arguments[ 0 ] === 'undefined';
}

class Set {
    constructor( iterable = [] ) {
        if( !( this instanceof Set ) ) {
            throw new TypeError( 'Constructor Set requires \'new\'' );
        }
        this.set = [];

        if( iterable && iterable.length ) {
            for( let item of iterable ) this.add( item );
        }
    }

    get size() {
        return this.set.length;
    }

    add( value ) {
        const i = this.set.indexOf( value );
        if( i > -1 ) {
            this.set[ i ] = value;
        } else {
            this.set.push( value );
        }
        return this;
    }

    delete( value ) {
        const i = this.set.indexOf( value );
        if( i > -1 ) {
            this.set.splice( i, 1 );
            return true;
        }
        return false;
    }

    clear() {
        this.set = [];
    }

    forEach( callback, thisArg ) {
        isUndefined( thisArg ) && ( this.Arg = this );
        for( let item of this.set ) {
            callback.call( thisArg, item, item, this );
        }
    }

    has( value ) {
        return this.set.indexOf( value ) > -1;
    }

    keys() {
        return this.values();
    }

    entries() {
        const res = [];
        for( let item of this.set ) {
            res.push( [ item, item ] ); 
        }
        return res;
    }

    values() {
        return this.set;
    }
}

module.exports = Set;
