/**
 * Recipe configuration
 */
export default class RecipeConfig {

    /**
     * Get the ingredient measurement types.
     */
    get measurementTypes() {
        return [
            {
                name: 'Teaspoon(s)',
                value: 'tsp'
            },
            {
                name: 'Tablespoon(s)',
                value: 'tbsp'
            },
            {
                name: 'Cup(s)',
                value: 'cp'
            },
            {
                name: 'Quart(s)',
                value: 'qt'
            },
            {
                name: 'Gallon(s)',
                value: 'gl'
            },
            {
                name: 'Ounce(s)',
                value: 'oz'
            },
            {
                name: 'Pound(s)',
                value: 'lbs'
            },
            {
                name: 'Liter(s)',
                value: 'lt'
            },
            {
                name: 'Gram(s)',
                value: 'gr'
            },
            {
                name: 'Kilogram(s)',
                value: 'kilo'
            }
        ];
    };

    /**
     * Get textare configuration.
     */
    get textAreaConfig() {
        return {
            rows: '5',
            columns: '30',
        }
    }
}
