"use client";
import { FC, memo } from "react";
import { BaseFrame } from "@/shared";
import { MyDictContent } from "./MyDictContent";
import { SortSelection } from "./SortSelection";

const MyDictionaryComponent: FC = () => (
  <BaseFrame>
    <SortSelection />
    <MyDictContent />
  </BaseFrame>
);

export const MyDictionary = memo(MyDictionaryComponent);
