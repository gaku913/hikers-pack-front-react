export type AnyObject = Partial<{
  [key: string]: unknown;
}>;

export function accessObject<T extends AnyObject>(obj: T, keys: string[]) {
  if (keys.length === 0) {
    return obj;
  }

  const [currentKey, ...remainingKeys] = keys;
  const nextObj = obj[currentKey];

  if (nextObj === null) {
    return null;
  }

  if (typeof nextObj === "undefined") {
    return undefined;
  }

  return accessObject(nextObj, remainingKeys);
}