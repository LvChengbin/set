import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default [ {
    input : 'src/set.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } )
    ],
    output : [
        { file : 'dist/set.cjs.js', format : 'cjs' },
        { file : 'dist/set.js', format : 'umd', name : 'Set' }
    ]
}, {
    input : 'src/set.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } ),
        buble( {
            transforms : {
                dangerousForOf : true
            }
        } )
    ],
    output : [
        { file : 'dist/set.bc.js', format : 'umd', name : 'Set' }
    ]
} ];
