
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
