import React from 'react';

export default function ListItem({
  title,
  content,
  clickedButton,
}: {
  title: string;
  content: string;
  clickedButton: string;
}) {
  return (
    <div>
      <span>{title}</span>
      <span>{content}</span>
      <span>{clickedButton}</span>
    </div>
  );
}
