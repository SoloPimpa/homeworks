import React from 'react';

export default function Square ({x, y}) {

    return (
        <div style={{width:'100px', height:'100px', backgroundColor:'green',
            position: 'absolute',
            top: y -50,
            left: x - 50,
        }}>
        </div>
    );
}


