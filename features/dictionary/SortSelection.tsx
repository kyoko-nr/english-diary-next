"use client";
import { FC, memo } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { currentSortKeyAtom, setCurrentSortKeyAction } from "./states/currentSortKeyState";
import { SortOptions } from "@/shared";

const SortSelectionComponent: FC = () => {
  const sortKey = useAtomValue(currentSortKeyAtom);
  const setOptionKey = useSetAtom(setCurrentSortKeyAction);

  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel id="sort-label">Sort</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-selection"
        value={sortKey}
        label="Sort"
        onChange={(option) => setOptionKey(option.target.value)}
      >
        {SortOptions.map((p) => (
          <MenuItem value={p.key} key={p.key}>
            {p.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SortSelection = memo(SortSelectionComponent);
