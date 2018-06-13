import React from 'react';
import { snapshot } from 'test/helpers';
import NoteText from '.';

snapshot('NoteText/nomal', <NoteText>テキスト</NoteText>);
snapshot('NoteText/emphasis', <NoteText emphasis>テキスト</NoteText>);
snapshot('NoteText/red', <NoteText red>テキスト</NoteText>);
snapshot(
  'NoteText/red-emphasis',
  <NoteText red emphasis>
    テキスト
  </NoteText>,
);
