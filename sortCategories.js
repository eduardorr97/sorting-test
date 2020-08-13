var out = []
var index = 0
const exits = {}

const insertCategory = (cat) => {
    out = exits[cat.id] ? out : [...out, cat]
    exits[cat.id] = true
}

const sortCategoriesForInsert = (categories, category) => {
    category = category || categories[index]
    let parent = categories.find(cat => cat.id === category.parent_id)
    !parent ?
        insertCategory(category) :
        (
            !exits[parent.id] && sortCategoriesForInsert(categories, parent),
            insertCategory(category)
        )
    index < categories.length - 1 && sortCategoriesForInsert(categories, categories[++index])
    return out
}

module.exports = {
    sortCategoriesForInsert
}