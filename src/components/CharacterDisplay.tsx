import React, { useState, useEffect } from 'react';
import { TypingQuestion, Emotion, Mode } from '../types';

interface CharacterDisplayProps {
  mode: Mode;
  question: TypingQuestion;
  emotion: Emotion;
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ mode, question, emotion }) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [failedBase, setFailedBase] = useState<boolean>(false);

  useEffect(() => {
    setFailedBase(false);
    if (!question.image) {
      setImgSrc('');
      return;
    }

    const baseSrc = question.image;
    const dotIndex = baseSrc.lastIndexOf('.');
    if (dotIndex === -1) {
      setImgSrc(`/images/${baseSrc}`);
      return;
    }

    const name = baseSrc.substring(0, dotIndex);
    const ext = baseSrc.substring(dotIndex);

    let targetSrc = baseSrc;
    if (emotion === 'bad') {
      targetSrc = `${name}_bad${ext}`;
    } else if (emotion === 'good') {
      targetSrc = `${name}_good${ext}`;
    } else if (emotion === 'love') {
      targetSrc = `${name}_love${ext}`;
    }

    setImgSrc(`/images/${targetSrc}`);
  }, [question, emotion]);

  if (mode !== 'school') {
    return null;
  }

  if (question.images && Array.isArray(question.images) && question.images.length > 0) {
    return (
      <div id="char-image-box">
        {question.images.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={`/images/${src}`}
            alt="Character"
            className="char-img-group"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ))}
      </div>
    );
  }

  if (question.image && !failedBase) {
    return (
      <div id="char-image-box">
        <img
          id="single-char-img"
          src={imgSrc}
          alt="Character"
          className="char-img-single"
          onError={() => {
            const base = `/images/${question.image}`;
            if (imgSrc !== base) {
              setImgSrc(base);
            } else {
              setFailedBase(true);
            }
          }}
        />
      </div>
    );
  }

  return null;
};
