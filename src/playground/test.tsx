// @ts-nocheck
// This is a Quokka test file
import React from 'react';

// You can write and test React components
const TestComponent = () => {
  const value = 42;
  console.log('Value is:', value); // Quokka will show this inline

  // Test array operations
  const array = [1, 2, 3, 4, 5];
  const doubled = array.map(x => x * 2);
  console.log('Doubled array:', doubled);

  return (
    <div>
      <h1>Test Component</h1>
      <p>Value: {value}</p>
    </div>
  );
};

// Test object manipulations
const obj = {
  name: 'Test',
  value: 123
};

console.log('Object:', obj);

// You can also test your actual project components here
