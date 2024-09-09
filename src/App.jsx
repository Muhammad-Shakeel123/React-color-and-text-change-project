import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');
  const [textColor, setTextColor] = useState('#000000');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      {/* Title */}
      <h1
        className="text-6xl font-bold mb-12 transition-all duration-500"
        style={{ color: textColor }}
      >
        Welcome, I'm Muhammad Shakeel
      </h1>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          'Red',
          'Blue',
          'Green',
          'Yellow',
          'Purple',
          'Orange',
          'Black',
          'White',
        ].map(colorName => (
          <button
            key={colorName}
            onClick={() => setColor(colorName.toLowerCase())}
            className="w-20 h-20 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300"
            style={{ backgroundColor: colorName.toLowerCase() }}
          />
        ))}
      </div>

      {/* Text Color Change Button */}
      <button
        onClick={() => setTextColor(getRandomColor())}
        className="px-6 py-3 bg-indigo-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
      >
        Change Text Color
      </button>
    </div>
  );
}

export default App;
