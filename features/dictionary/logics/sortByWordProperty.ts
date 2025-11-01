type SortableKey<T> = {
  [K in keyof T]: T[K] extends string | Date ? K : never;
}[keyof T];

export const sortByWordProperty = <T>(
  arry: ReadonlyArray<T>,
  by: SortableKey<T>,
): T[] => {
  const copy = [...arry];
  copy.sort((a, b) => {
    const av = a[by];
    const bv = b[by];

    if (av === bv) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;

    if (av instanceof Date && bv instanceof Date) {
      return av.getTime() - bv.getTime();
    }

    if (typeof av === "string" && typeof bv === "string") {
      return av.localeCompare(bv);
    }

    return 0;
  });
  return copy;
};
