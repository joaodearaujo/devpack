import { categories, packages } from '../../packages/data/packages.data'

export const quickStartSteps = [
    { number: '01', text: 'Browse the package catalog by category' },
    { number: '02', text: 'Select the tools you need with the selection controls' },
    { number: '03', text: 'Copy the generated install script' },
    { number: '04', text: 'Run it in your Ubuntu terminal' },
]

export const popularPackages = packages.filter((pkg) => pkg.popular)

export const overviewStats = {
    totalPackages: packages.length,
    categories: categories.length - 1,
    ubuntuSupport: 3,
}
