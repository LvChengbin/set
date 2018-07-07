import Set from '../src/set';

describe( 'Set', () => {
    it( 'should throw an TypeError is using Set without a "new"', () => {
        expect( function() { Set() } ).toThrowError( TypeError );
    } );

    it( 'constructor with an NULL as argument', () => {
        const set = new Set( null );
        expect( set.size ).toEqual( 0 );
    } );

    it( 'constructor without arguments', () => {
        const set = new Set();
        expect( set.size ).toEqual( 0 );
    } );

    it( 'constructor with an iterable argument', () => {
        const set = new Set( [ 'x', 1 ] );
        expect( set.size ).toEqual( 2 );
    } );
} );

describe( 'Set.prototype.size', () => {
    it( 'after initializion', () => {
        const set = new Set( [ 'x', 1, 'y', 1 ] );
        expect( set.size ).toEqual( 3 );
    } );

    it( 'after deleting', () => {
        const set = new Set( [ 'x', 1, 'y' ] );
        set.delete( 'x' );
        expect( set.size ).toEqual( 2 );
    } );

    it( 'after inserting new data', () => {
        const set = new Set( [ 1, 'y' ] );
        set.add( 'x' );
        expect( set.size ).toEqual( 3 );
    } );
} );

describe( 'Set.prototype.add', () => {
    it( 'to add a new value', () => {
        const set = new Set();
        set.add( 'x' );
        expect( set.has( 'x' ) ).toBeTruthy();
    } );

    it( 'to add an existing value', () => {
        const set = new Set( [ 'x' ] );
        set.add( 'x' );
        expect( set.has( 'x' ) ).toBeTruthy();
    } );
} );

describe( 'Set.prototype.delete', () => {
    it( 'to delete an existing value', () => {
        const set = new Set( [ 'x' ] );
        expect( set.delete( 'x' ) ).toBeTruthy();
    } );
    it( 'to delete a non-existing value', () => {
        const set = new Set();
        expect( set.delete( 'x' ) ).toBeFalsy();
    } );
} );

describe( 'Set.prototype.clear', () => {
    it( 'clear all data', () => {
        const set = new Set( [ 1, 2, 3 ] );
        set.clear();
        expect( set.size ).toEqual( 0 );
    } ); 
} );

describe( 'Set.prototype.has', () => {
    it( 'to try with an existing value', () => {
        const obj = {}; 
        const set = new Set( [ obj ] );
        expect( set.has( obj ) ).toBeTruthy();
    } );

    it( 'to try with a non-existing value', () => {
        const set = new Set();
        expect( set.has( 'x' ) ).toBeFalsy();
    } );
} );

describe( 'Set.prototype.forEach', () => {
    it( 'callback', () => {
        const obj = () => {};
        const set = new Set( [ obj ] );
        set.forEach( ( v1, v2, s ) => {
            expect( v1 ).toEqual( obj );
            expect( v2 ).toEqual( obj );
            expect( s ).toEqual( set );
        } );
    } );

    it( 'specifying a this argument', () => {
        const that = {};
        const obj = () => {};
        const set = new Set( [ obj ] );
        set.forEach( function() {
            expect( this ).toEqual( that );
        }, that ); 
    } );
} );

describe( 'Set.prototype.keys', () => {
    it( 'keys', () => {
        const obj = () => {};
        const set = new Set( [ obj ] );
        expect( set.keys() ).toEqual( [ obj ] );
    } );
} );

describe( 'Set.prototype.values', () => {
    it( 'values', () => {
        const obj = () => {};
        const set = new Set( [ obj ] );
        expect( set.values() ).toEqual( [ obj ] );
    } );
} );

describe( 'Set.prototype.entries', () => {
    it( 'values', () => {
        const obj = () => {};
        const set = new Set( [ obj ] );
        expect( set.entries() ).toEqual( [ [ obj, obj ] ] );
    } );
} );
