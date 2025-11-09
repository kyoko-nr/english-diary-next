"use client";
import { FC, memo } from "react";
import { MyDictContent } from "./MyDictContent";
import { SortSelection } from "./SortSelection";
import { AppFrame } from "../appframe";

const MyDictionaryComponent: FC = () => (
  <AppFrame maxWidth="lg">
    <SortSelection />
    <MyDictContent />
  </AppFrame>
);

export const MyDictionary = memo(MyDictionaryComponent);
