const compare = (a, b) => {
  if (a.parent_id !== b.id) {
    return -1;
  } else if (a.parent_id === b.id) {
    return 1;
  } else {
    return 0;
  }
};

const sortCategoriesForInsert = (input) => {
  const categories = JSON.parse(input);

  const nullParentCategories = categories.filter(
    (cat) => cat.parent_id === null
  );

  const withParentCategories = categories.filter(
    (cat) => !nullParentCategories.includes(cat)
  );

  const orderedCategories = withParentCategories.sort(compare);

  const properJsonOutput = [...nullParentCategories, ...orderedCategories];
  return properJsonOutput;
};

module.exports = sortCategoriesForInsert;
