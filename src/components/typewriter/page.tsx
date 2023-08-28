'use client'

import Typewriter from 'typewriter-effect';
import React from 'react';


export default function TypeWriter(){
    return(
        <Typewriter
            options={{
              strings: ['aqui!', 'agora!'],
              autoStart: true,
              loop: true,
            }}
          />
    )
}