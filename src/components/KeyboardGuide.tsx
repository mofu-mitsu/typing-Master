import React from 'react';

interface KeyboardGuideProps {
  activeKey: string | null;
  hasError: boolean;
}

const KEY_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  [' ']
];

export const KeyboardGuide: React.FC<KeyboardGuideProps> = ({ activeKey, hasError }) => {
  const currentKey = activeKey ? activeKey.toLowerCase() : null;

  return (
    <div id="keyboard-guide">
      {KEY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="key-row">
          {row.map((k) => {
            const isSpace = k === ' ';
            const isActive = currentKey === k;
            const isError = isActive && hasError;

            let className = 'key';
            if (isSpace) className += ' space-key';
            if (isActive) className += ' active-key';
            if (isError) className += ' error-key';

            return (
              <div
                key={k}
                className={className}
                data-key={k}
              >
                {isSpace ? 'Space' : k.toUpperCase()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
