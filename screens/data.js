import React from 'react';

var rows = [
  {
    text: "onPress Callback",
    right: [
      {
        text: 'DELETE',
        onPress: function () {
          alert('button pressed');
        },
        type: 'delete'
      }
    ]
  }
];

export default rows;