/*
Two typers of arrays in JavaScript:
1. Packed(Continious) Array: An array with no holes, where every index is filled with a value
2. Holey Array: An array with holes, where some indices are empty or undefined
*/

/*
- SMI (Small Interger)
- Packed Elements
- Double (float, string, function)
*/

/*
JS optimizes arrays based on the types or below order
PACKED_SMI_ELEMENTS > PACKED_DOUBLE_ELEMENTS > PACKED_ELEMENTS >
HOLEY_SMI_ELEMENTS > HOLEY_DOUBLE_ELEMENTS > HOLEY_ELEMENTS
*/

/*
NOW MOST IMPORTANT INSTRICTION:

You can not revert back the type of an array once it has been changed. Once the downgrade of the array type has been done, we can not updgrade it to previous type.

For example, once an array is PACKED_DOUBLE_ELEMENTS, you cannot revert it back to PACKED_SMI_ELEMENTS. Also, now optimization will also decreased to one level. Same goes for HOLEY arrays.

This means that once you push a non-integer value into an array, it will never be optimized back to a packed array with only small integers even you delete that element or pop the element.
*/

const arrOne = [1, 2, 3, 4, 5]; // PACKED_SMI_ELEMENTS
// the elements having only small interger type, we can't event take float number

arrOne.push(6.0); // PACKED_DOUBLE_ELEMENTS
// now the array is packed with double elements

arrOne.push("hello"); // PACKED_ELEMENTS
// now the array is packed with mixed elements

arrOne[10] = 11; // HOLEY_ELEMENTS
// now the array is a holey array, because we have skipped some indices

// HOLES ARE VERY EXPENSIVE IN THE JAVASCRIPT IN TERMS OF THE OPTIMIZATION

// Now the most of times, developers do the below kind of the code
const arrTwo = new Array(3);
// It's already holey array with three holes, as we have defined the size of the array but not filled it with any value, so try to avoid this kind of code
arrTwo[0] = 1;
arrTwo[1] = 2;
arrTwo[2] = 3;
// Now the array is still holey, because we have not filled the holes with values

// Instead, we can do below code, which is more optimized
const arrThree = []; // it doesn't have any holes as we have not defined the size of the array
arrThree.push(1);
arrThree.push(2);
arrThree.push("3");
// Now the array is packed with values, or we can add more elements with different datatypes, it will be still optimized than the arrTwo array.

// Also it's recommended that try to use internal methods or loops like for, for-in, for-of loops, as browsers or enginees are optimized for these loops and they will not create holes in the array.
