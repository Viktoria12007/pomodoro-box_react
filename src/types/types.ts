import * as React from "react";

export interface Task {
  id: number | string,
  name: string,
  pomodoro: number
}

export type ListTasks = Task[]

export interface ButtonProps extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
  variant: string,
  children: React.ReactNode,
}

export interface DropdownProps {
  parentOpen?: boolean,
  newStyle?: {
    top?: number,
    left?: number,
  },
  children: React.ReactNode,
}

export interface CoordsDropdown {
  top?: number,
  left?: number,
}
