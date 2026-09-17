import { categories } from '../data/packages.data'

export function CategoryFilter() {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category.name}
                    className="flex items-center gap-2 rounded-lg border border-app-border-strong px-2 py-1"
                >
                    {category.name}
                    <span>{category.count}</span>
                </button>
            ))}
        </div>
    )
}