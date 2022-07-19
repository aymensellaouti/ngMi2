export function addInArray<T>(oldTab: T[], newElement: T) {
  return [...oldTab, newElement];
}

export const deleteFromArray = <T>(oldTab: T[], toDeleteElement: T) => {
  return oldTab.filter((actualElement) => actualElement != toDeleteElement);
};
