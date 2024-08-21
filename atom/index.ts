import { atom } from "jotai";

export const TaskAtom = atom<TaskI[]>([]);
export const SelectedTaskAtom = atom<TaskI | null>();
