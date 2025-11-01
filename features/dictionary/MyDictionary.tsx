"use client";
import { FC, memo } from "react";
import { BaseFrame } from "@/shared";
import { MyDictContent, SortSelection } from "@/features";

const MyDictionaryComponent: FC = () => (
  <BaseFrame>
    <SortSelection />
    <MyDictContent />
  </BaseFrame>
);

export const MyDictionary = memo(MyDictionaryComponent);
